<?php
/*-------------------------------------------------------------------------
# mod_improved_ajax_login - Improved AJAX Login and Register
# -------------------------------------------------------------------------
# @ author    Balint Polgarfi
# @ copyright Copyright (C) 2013 Offlajn.com  All Rights Reserved.
# @ license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
# @ website   http://www.offlajn.com
-------------------------------------------------------------------------*/
?><?php

// warning: this file is encoded in UTF-8!

class HTML5_Data
{

    // at some point this should be moved to a .ser file. Another
    // possible optimization is to give UTF-8 bytes, not Unicode
    // codepoints
    protected static $realCodepointTable = array(
        0x0D => 0x000A, // LINE FEED (LF)
        0x80 => 0x20AC, // EURO SIGN ('€')
        0x81 => 0xFFFD, // REPLACEMENT CHARACTER
        0x82 => 0x201A, // SINGLE LOW-9 QUOTATION MARK ('‚')
        0x83 => 0x0192, // LATIN SMALL LETTER F WITH HOOK ('ƒ')
        0x84 => 0x201E, // DOUBLE LOW-9 QUOTATION MARK ('„')
        0x85 => 0x2026, // HORIZONTAL ELLIPSIS ('…')
        0x86 => 0x2020, // DAGGER ('†')
        0x87 => 0x2021, // DOUBLE DAGGER ('‡')
        0x88 => 0x02C6, // MODIFIER LETTER CIRCUMFLEX ACCENT ('ˆ')
        0x89 => 0x2030, // PER MILLE SIGN ('‰')
        0x8A => 0x0160, // LATIN CAPITAL LETTER S WITH CARON ('Š')
        0x8B => 0x2039, // SINGLE LEFT-POINTING ANGLE QUOTATION MARK ('‹')
        0x8C => 0x0152, // LATIN CAPITAL LIGATURE OE ('Œ')
        0x8D => 0xFFFD, // REPLACEMENT CHARACTER
        0x8E => 0x017D, // LATIN CAPITAL LETTER Z WITH CARON ('Ž')
        0x8F => 0xFFFD, // REPLACEMENT CHARACTER
        0x90 => 0xFFFD, // REPLACEMENT CHARACTER
        0x91 => 0x2018, // LEFT SINGLE QUOTATION MARK ('‘')
        0x92 => 0x2019, // RIGHT SINGLE QUOTATION MARK ('’')
        0x93 => 0x201C, // LEFT DOUBLE QUOTATION MARK ('“')
        0x94 => 0x201D, // RIGHT DOUBLE QUOTATION MARK ('”')
        0x95 => 0x2022, // BULLET ('•')
        0x96 => 0x2013, // EN DASH ('–')
        0x97 => 0x2014, // EM DASH ('—')
        0x98 => 0x02DC, // SMALL TILDE ('˜')
        0x99 => 0x2122, // TRADE MARK SIGN ('™')
        0x9A => 0x0161, // LATIN SMALL LETTER S WITH CARON ('š')
        0x9B => 0x203A, // SINGLE RIGHT-POINTING ANGLE QUOTATION MARK ('›')
        0x9C => 0x0153, // LATIN SMALL LIGATURE OE ('œ')
        0x9D => 0xFFFD, // REPLACEMENT CHARACTER
        0x9E => 0x017E, // LATIN SMALL LETTER Z WITH CARON ('ž')
        0x9F => 0x0178, // LATIN CAPITAL LETTER Y WITH DIAERESIS ('Ÿ')
    );

    protected static $namedCharacterReferences;

    protected static $namedCharacterReferenceMaxLength;

    /**
     * Returns the "real" Unicode codepoint of a malformed character
     * reference.
     */
    public static function getRealCodepoint($ref) {
        if (!isset(self::$realCodepointTable[$ref])) return false;
        else return self::$realCodepointTable[$ref];
    }

    public static function getNamedCharacterReferences() {
        if (!self::$namedCharacterReferences) {
            self::$namedCharacterReferences = unserialize(
                file_get_contents(dirname(__FILE__) . '/named-character-references.ser'));
        }
        return self::$namedCharacterReferences;
    }

    public static function getNamedCharacterReferenceMaxLength() {
        if (!self::$namedCharacterReferenceMaxLength) {
            $namedCharacterReferences = self::getNamedCharacterReferences();
            $lengths = array_map('strlen', array_keys($namedCharacterReferences));
            self::$namedCharacterReferenceMaxLength = max($lengths);
        }
        return self::$namedCharacterReferenceMaxLength;
    }


    /**
     * Converts a Unicode codepoint to sequence of UTF-8 bytes.
     * @note Shamelessly stolen from HTML Purifier, which is also
     *       shamelessly stolen from Feyd (which is in public domain).
     */
    public static function utf8chr($code) {
        if($code > 0x10FFFF or $code < 0x0 or
          ($code >= 0xD800 and $code <= 0xDFFF) ) {
            // bits are set outside the "valid" range as defined
            // by UNICODE 4.1.0
            return "\xEF\xBF\xBD";
        }

        $x = $y = $z = $w = 0;
        if ($code < 0x80) {
            // regular ASCII character
            $x = $code;
        } else {
            // set up bits for UTF-8
            $x = ($code & 0x3F) | 0x80;
            if ($code < 0x800) {
               $y = (($code & 0x7FF) >> 6) | 0xC0;
            } else {
                $y = (($code & 0xFC0) >> 6) | 0x80;
                if($code < 0x10000) {
                    $z = (($code >> 12) & 0x0F) | 0xE0;
                } else {
                    $z = (($code >> 12) & 0x3F) | 0x80;
                    $w = (($code >> 18) & 0x07) | 0xF0;
                }
            }
        }
        // set up the actual character
        $ret = '';
        if($w) $ret .= chr($w);
        if($z) $ret .= chr($z);
        if($y) $ret .= chr($y);
        $ret .= chr($x);

        return $ret;
    }

}