[node-taglib-sharp](../README.md) / [Exports](../modules.md) / Id3v2PlayCountFrame

# Class: Id3v2PlayCountFrame

This class extends {@link Frame} implementing support for ID3v2 play count (PCNT) frames.

## Hierarchy

* [*Id3v2Frame*](id3v2frame.md)

  ↳ **Id3v2PlayCountFrame**

## Table of contents

### Properties

- [\_header](id3v2playcountframe.md#_header)

### Accessors

- [encryptionId](id3v2playcountframe.md#encryptionid)
- [flags](id3v2playcountframe.md#flags)
- [frameClassType](id3v2playcountframe.md#frameclasstype)
- [frameId](id3v2playcountframe.md#frameid)
- [groupId](id3v2playcountframe.md#groupid)
- [playCount](id3v2playcountframe.md#playcount)
- [size](id3v2playcountframe.md#size)

### Methods

- [clone](id3v2playcountframe.md#clone)
- [fieldData](id3v2playcountframe.md#fielddata)
- [parseFields](id3v2playcountframe.md#parsefields)
- [render](id3v2playcountframe.md#render)
- [renderFields](id3v2playcountframe.md#renderfields)
- [setData](id3v2playcountframe.md#setdata)
- [correctEncoding](id3v2playcountframe.md#correctencoding)
- [fromEmpty](id3v2playcountframe.md#fromempty)
- [fromOffsetRawData](id3v2playcountframe.md#fromoffsetrawdata)
- [fromRawData](id3v2playcountframe.md#fromrawdata)

## Properties

### \_header

• `Protected` **\_header**: [*Id3v2FrameHeader*](id3v2frameheader.md)

Inherited from: [Id3v2Frame](id3v2frame.md).[_header](id3v2frame.md#_header)

## Accessors

### encryptionId

• **encryptionId**(): *number*

Gets the encryption ID applied to the current instance.

**Returns:** *number*

number Value containing the encryption identifier for the current instance or
    `undefined` if not set.

• **encryptionId**(`value`: *number*): *void*

Sets the encryption ID applied to the current instance.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *number* | Value containing the encryption identifier for the current instance. Must be an     8-bit unsigned integer. Setting to `undefined` will remove the encryption header and ID    |

**Returns:** *void*

number Value containing the encryption identifier for the current instance or
    `undefined` if not set.

___

### flags

• **flags**(): [*Id3v2FrameFlags*](../enums/id3v2frameflags.md)

Gets the frame flags applied to the current instance.

**Returns:** [*Id3v2FrameFlags*](../enums/id3v2frameflags.md)

• **flags**(`value`: [*Id3v2FrameFlags*](../enums/id3v2frameflags.md)): *void*

Sets the frame flags applied to the current instance.
If the value includes either [Id3v2FrameFlags.Encryption](../enums/id3v2frameflags.md#encryption) or
[Id3v2FrameFlags.Compression](../enums/id3v2frameflags.md#compression), [render](id3v2playcountframe.md#render) will throw.

#### Parameters:

Name | Type |
------ | ------ |
`value` | [*Id3v2FrameFlags*](../enums/id3v2frameflags.md) |

**Returns:** *void*

___

### frameClassType

• **frameClassType**(): [*Id3v2FrameClassType*](../enums/id3v2frameclasstype.md)

**`inheritdoc`** 

**Returns:** [*Id3v2FrameClassType*](../enums/id3v2frameclasstype.md)

___

### frameId

• **frameId**(): [*Id3v2FrameIdentifier*](id3v2frameidentifier.md)

Gets the frame ID for the current instance.

**Returns:** [*Id3v2FrameIdentifier*](id3v2frameidentifier.md)

FrameIdentifier Object representing of the identifier of the frame

___

### groupId

• **groupId**(): *number*

Gets the grouping ID applied to the current instance.

**Returns:** *number*

number Value containing the grouping identifier for the current instance, or
    `undefined` if not set.

• **groupId**(`value`: *number*): *void*

Sets the grouping ID applied to the current instance.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *number* | Grouping identifier for the current instance. Must be a 8-bit unsigned integer.     Setting to `undefined` will remove the grouping identity header and ID    |

**Returns:** *void*

number Value containing the grouping identifier for the current instance, or
    `undefined` if not set.

___

### playCount

• **playCount**(): BigInteger

Gets the play count of the current instance.

**Returns:** BigInteger

• **playCount**(`value`: BigInteger): *void*

Sets the play count of the current instance.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | BigInteger | Number of times this track has been played    |

**Returns:** *void*

___

### size

• **size**(): *number*

Gets the size of the current instance as it was last stored on disk.
NOTE: This value is not used outside of reading a frame from disk, so newly created frames
    should not have this value set.

**Returns:** *number*

## Methods

### clone

▸ **clone**(): [*Id3v2Frame*](id3v2frame.md)

**`inheritdoc`** 

**Returns:** [*Id3v2Frame*](id3v2frame.md)

Overrides: [Id3v2Frame](id3v2frame.md)

___

### fieldData

▸ `Protected`**fieldData**(`frameData`: [*ByteVector*](bytevector.md), `offset`: *number*, `version`: *number*, `dataIncludesHeader`: *boolean*): [*ByteVector*](bytevector.md)

Extracts the field data from the raw portion of an ID3v2 frame.
This method is necessary for extracting extra data prepended to the frame such the as
grouping ID.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`frameData` | [*ByteVector*](bytevector.md) | Raw frame data   |
`offset` | *number* | Index at which the data is contained   |
`version` | *number* | Version of the ID3v2 tag the data was originally encoded with   |
`dataIncludesHeader` | *boolean* | `true` if `frameData` includes the header, `false`     otherwise    |

**Returns:** [*ByteVector*](bytevector.md)

Inherited from: [Id3v2Frame](id3v2frame.md)

___

### parseFields

▸ `Protected`**parseFields**(`data`: [*ByteVector*](bytevector.md), `_version`: *number*): *void*

**`inheritdoc`** 

#### Parameters:

Name | Type |
------ | ------ |
`data` | [*ByteVector*](bytevector.md) |
`_version` | *number* |

**Returns:** *void*

Overrides: [Id3v2Frame](id3v2frame.md)

___

### render

▸ **render**(`version`: *number*): [*ByteVector*](bytevector.md)

Renders the current instance, encoded in a specified ID3v2 version.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`version` | *number* | Version of ID3v2 to use when encoding the current instance    |

**Returns:** [*ByteVector*](bytevector.md)

Inherited from: [Id3v2Frame](id3v2frame.md)

___

### renderFields

▸ `Protected`**renderFields**(`_version`: *number*): [*ByteVector*](bytevector.md)

**`inheritdoc`** 

#### Parameters:

Name | Type |
------ | ------ |
`_version` | *number* |

**Returns:** [*ByteVector*](bytevector.md)

Overrides: [Id3v2Frame](id3v2frame.md)

___

### setData

▸ `Protected`**setData**(`data`: [*ByteVector*](bytevector.md), `offset`: *number*, `readHeader`: *boolean*, `version`: *number*): *void*

Populates the current instance by reading the raw frame from disk, optionally reading the
header.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | [*ByteVector*](bytevector.md) | Raw ID3v2 frame   |
`offset` | *number* | Offset in `data` at which the frame begins.   |
`readHeader` | *boolean* | Whether or not to read the reader into the current instance.   |
`version` | *number* | Version of the ID3v2 tag the data was encoded with    |

**Returns:** *void*

Inherited from: [Id3v2Frame](id3v2frame.md)

___

### correctEncoding

▸ `Protected` `Static`**correctEncoding**(`type`: [*StringType*](../enums/stringtype.md), `version`: *number*): [*StringType*](../enums/stringtype.md)

Converts an encoding to be a supported encoding for a specified tag version.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | [*StringType*](../enums/stringtype.md) | Value containing the original encoding   |
`version` | *number* | Value containing the ID3v2 version to be encoded.   |

**Returns:** [*StringType*](../enums/stringtype.md)

StringType Value containing the correct encoding to use, based on
    [Id3v2Settings.forceDefaultEncoding](id3v2settings.md#forcedefaultencoding) and what is supported by
    `version`

Inherited from: [Id3v2Frame](id3v2frame.md)

___

### fromEmpty

▸ `Static`**fromEmpty**(): [*Id3v2PlayCountFrame*](id3v2playcountframe.md)

Constructs and initializes a new instance with a count of zero

**Returns:** [*Id3v2PlayCountFrame*](id3v2playcountframe.md)

___

### fromOffsetRawData

▸ `Static`**fromOffsetRawData**(`data`: [*ByteVector*](bytevector.md), `offset`: *number*, `header`: [*Id3v2FrameHeader*](id3v2frameheader.md), `version`: *number*): [*Id3v2PlayCountFrame*](id3v2playcountframe.md)

Constructs and initializes a new instance of frame by reading its raw data in a specified
ID3v2 version starting at a specified offset.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | [*ByteVector*](bytevector.md) | Raw representation of the new frame.   |
`offset` | *number* | Offset into `data` where the frame actually begins. Must be a     positive, safe integer   |
`header` | [*Id3v2FrameHeader*](id3v2frameheader.md) | Header of the frame found at `offset` in the data   |
`version` | *number* | ID3v2 version the frame was originally encoded with    |

**Returns:** [*Id3v2PlayCountFrame*](id3v2playcountframe.md)

___

### fromRawData

▸ `Static`**fromRawData**(`data`: [*ByteVector*](bytevector.md), `version`: *number*): [*Id3v2PlayCountFrame*](id3v2playcountframe.md)

Constructs and initializes a new instance by reading its raw data in a specified ID3v2
version

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | [*ByteVector*](bytevector.md) | ByteVector starting with the raw representation of the new frame   |
`version` | *number* | ID3v2 version the raw frame is encoded in, must be a positive 8-bit integer    |

**Returns:** [*Id3v2PlayCountFrame*](id3v2playcountframe.md)
