[node-taglib-sharp](../README.md) / [Exports](../modules.md) / Id3v2Settings

# Class: Id3v2Settings

## Hierarchy

* **Id3v2Settings**

## Table of contents

### Accessors

- [defaultEncoding](id3v2settings.md#defaultencoding)
- [defaultVersion](id3v2settings.md#defaultversion)
- [footerSize](id3v2settings.md#footersize)
- [forceDefaultEncoding](id3v2settings.md#forcedefaultencoding)
- [forceDefaultVersion](id3v2settings.md#forcedefaultversion)
- [headerSize](id3v2settings.md#headersize)
- [strictFrameForVersion](id3v2settings.md#strictframeforversion)
- [useNonStandardV2V3GenreSeparators](id3v2settings.md#usenonstandardv2v3genreseparators)
- [useNonStandardV2V3NumericGenres](id3v2settings.md#usenonstandardv2v3numericgenres)
- [useNumericGenres](id3v2settings.md#usenumericgenres)

## Accessors

### defaultEncoding

• `Static`**defaultEncoding**(): [*StringType*](../enums/stringtype.md)

Gets the encoding to use when creating new frames.

**Returns:** [*StringType*](../enums/stringtype.md)

• `Static`**defaultEncoding**(`value`: [*StringType*](../enums/stringtype.md)): *void*

Sets the encoding to use when creating new frames.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | [*StringType*](../enums/stringtype.md) | Encoding to use when creating new frames    |

**Returns:** *void*

___

### defaultVersion

• `Static`**defaultVersion**(): *number*

Gets the default version to use when creating new tags.
If [forceDefaultEncoding](id3v2settings.md#forcedefaultencoding) is `true` then all tags will be rendered with this version.

**Returns:** *number*

• `Static`**defaultVersion**(`value`: *number*): *void*

Sets the default version to use when creating new tags.
If [forceDefaultEncoding](id3v2settings.md#forcedefaultencoding) is `true` then all tags will be rendered with this version.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *number* | ID3v2 version to use. Must be 2, 3, or 4. The default for this library is 3    |

**Returns:** *void*

___

### footerSize

• `Static`**footerSize**(): *number*

Size of an ID3v2 footer in bytes

**Returns:** *number*

___

### forceDefaultEncoding

• `Static`**forceDefaultEncoding**(): *boolean*

Gets whether or not to render all frames with the default encoding rather than their
original encoding.

**Returns:** *boolean*

• `Static`**forceDefaultEncoding**(`value`: *boolean*): *void*

Sets whether or not to render all frames with the default encoding rather than their
original encoding.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *boolean* | If `true` frames will be rendered using [defaultEncoding](id3v2settings.md#defaultencoding) rather than     their original encoding.    |

**Returns:** *void*

___

### forceDefaultVersion

• `Static`**forceDefaultVersion**(): *boolean*

Gets whether or not to save all tags in the default version rather than their original
version.

**Returns:** *boolean*

• `Static`**forceDefaultVersion**(`value`: *boolean*): *void*

Sets whether or not to save all tags in the default version rather than their original
version.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *boolean* | If `true`, tags will be saved in the version defined in [defaultVersion](id3v2settings.md#defaultversion)     rather than their original format, with the exception of tags with footers which will     always be saved in version 4    |

**Returns:** *void*

___

### headerSize

• `Static`**headerSize**(): *number*

Size of an ID3v2 header in bytes

**Returns:** *number*

___

### strictFrameForVersion

• `Static`**strictFrameForVersion**(): *boolean*

Gets whether or not attempting to write a frame that is unsupported in the desired version
will throw an error.
If `true` writing a frame that is not supported in the desired version will throw an error
during the render process. If `false` if a frame is not supported in the desired version it
will be omitted from rendering and no error will be thrown.

**Returns:** *boolean*

• `Static`**strictFrameForVersion**(`value`: *boolean*): *void*

Sets whether or not attempting to write a frame that is unsupported in the desired version
will throw an error.
If `true` writing a frame that is not supported in the desired version will throw an error
during the render process. If `false` if a frame is not supported in the desired version it
will be omitted from rendering and no error will be thrown.

#### Parameters:

Name | Type |
------ | ------ |
`value` | *boolean* |

**Returns:** *void*

___

### useNonStandardV2V3GenreSeparators

• `Static`**useNonStandardV2V3GenreSeparators**(): *boolean*

Gets whether or not to use non-standard genre separators on ID3v2.2 and ID3v2.4.
If `true`, the TCO/TCON frame value will be separated by `;` and/or `/`, empty values will
be thrown out. If `false`, the TCO/TCON frame value will be returned as-is (after processing
standard, escaped numeric genres).

**`remarks`** The official ID3v2 standard makes no mention of separators for genres, one of the
    inherent flaws fixed in ID3v2.4. However, various media players, as well as the original
    implementation of TagLib#, support using `;` and `/` to separate genres. In order to
    maintain compatibility, this functionality is preserved, but can be disabled by setting
    [useNonStandardV2V3GenreSeparators](id3v2settings.md#usenonstandardv2v3genreseparators) to `false`.

**Returns:** *boolean*

• `Static`**useNonStandardV2V3GenreSeparators**(`value`: *boolean*): *void*

Sets whether or not to use non-standard genre separators on ID3v2.2 and ID3v2.3.
If `true`, the TCO/TCON frame value will be separated by `;` and/or `/`, empty values will
be thrown out. If `false`, the TCO/TCON frame value will be returned as-is (after processing
standard, escaped numeric genres).

**`remarks`** The official ID3v2 standard makes no mention of separators for genres, one of the
    inherent flaws fixed in ID3v2.4. However, various media players, as well as the original
    implementation of TagLib#, support using `;` and `/` to separate genres. In order to
    maintain compatibility, this functionality is preserved, but can be disabled by setting
    [useNonStandardV2V3GenreSeparators](id3v2settings.md#usenonstandardv2v3genreseparators) to `false`.

#### Parameters:

Name | Type |
------ | ------ |
`value` | *boolean* |

**Returns:** *void*

___

### useNonStandardV2V3NumericGenres

• `Static`**useNonStandardV2V3NumericGenres**(): *boolean*

Gets whether or not to use non-standard numeric genre parsing on ID3v2.2 and ID3v2.3. If
`true`, a purely numeric TCO/TCON frame value will attempt to be parsed as a numeric genre.
If `false`, the TCO/TCON frame value will be returned without parsing purely numeric genres.

**`remarks`** The official ID3v2.2/ID3v2.3 standard only supports numeric genres if they are
    escaped inside parenthesis (eg, `(12)`). However, the original implementation of TagLib#
    allowed ID3v2.2 and ID3v2.3 tags to parse unescaped numeric genres. In order to maintain
    compatibility, this functionality is preserved, but can be disabled by setting
    [useNonStandardV2V3NumericGenres](id3v2settings.md#usenonstandardv2v3numericgenres) to `false`.

**Returns:** *boolean*

• `Static`**useNonStandardV2V3NumericGenres**(`value`: *boolean*): *void*

Sets whether or not to use non-standard numeric genre parsing on ID3v2.2 and ID3v2.3. If
`true`, a purely numeric TCO/TCON frame value will attempt to be parsed as a numeric genre.
If `false`, the TCO/TCON frame value will be returned without parsing purely numeric genres.

**`remarks`** The official ID3v2.2/ID3v2.3 standard only supports numeric genres if they are
    escaped inside parenthesis (eg, `(12)`). However, the original implementation of TagLib#
    allowed ID3v2.2 and ID3v2.3 tags to parse unescaped numeric genres. In order to maintain
    compatibility, this functionality is preserved, but can be disabled by setting
    [useNonStandardV2V3NumericGenres](id3v2settings.md#usenonstandardv2v3numericgenres) to `false`.

#### Parameters:

Name | Type |
------ | ------ |
`value` | *boolean* |

**Returns:** *void*

___

### useNumericGenres

• `Static`**useNumericGenres**(): *boolean*

Gets whether or not to use ID3v1 style numeric genres when possible.
If `true`, the library will try looking up the numeric genre code when storing the value.
for ID3v2.2 and ID3v2.3 "Rock" would be stored as "(17)" and for ID3v2.4, it would be
stored as "17".

**Returns:** *boolean*

• `Static`**useNumericGenres**(`value`: *boolean*): *void*

Sets whether or not to use ID3v1 style numeric genres when possible.
If `true`, the library will try looking up the numeric genre code when storing the value.
for ID3v2.2 and ID3v2.3 "Rock" would be stored as "(17)" and for ID3v2.4, it would be
stored as "17".

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *boolean* | Whether or not to use genres with numeric values when values when possible    |

**Returns:** *void*
