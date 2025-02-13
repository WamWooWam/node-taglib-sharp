[node-taglib-sharp](../README.md) / [Exports](../modules.md) / Tag

# Class: Tag

Abstract class that provides generic access to standard tag features. All tag types will extend
this class.
Because not every tag type supports the same features, it may be useful to check that the value
is stored by re-reading the property after it is set.

## Hierarchy

* **Tag**

  ↳ [*CombinedTag*](combinedtag.md)

  ↳ [*ApeTag*](apetag.md)

  ↳ [*Id3v1Tag*](id3v1tag.md)

  ↳ [*Id3v2Tag*](id3v2tag.md)

## Table of contents

### Constructors

- [constructor](tag.md#constructor)

### Properties

- [tagTypes](tag.md#tagtypes)

### Accessors

- [album](tag.md#album)
- [albumArtists](tag.md#albumartists)
- [albumArtistsSort](tag.md#albumartistssort)
- [albumSort](tag.md#albumsort)
- [amazonId](tag.md#amazonid)
- [beatsPerMinute](tag.md#beatsperminute)
- [comment](tag.md#comment)
- [composers](tag.md#composers)
- [composersSort](tag.md#composerssort)
- [conductor](tag.md#conductor)
- [copyright](tag.md#copyright)
- [dateTagged](tag.md#datetagged)
- [description](tag.md#description)
- [disc](tag.md#disc)
- [discCount](tag.md#disccount)
- [firstAlbumArtist](tag.md#firstalbumartist)
- [firstAlbumArtistSort](tag.md#firstalbumartistsort)
- [firstComposer](tag.md#firstcomposer)
- [firstComposerSort](tag.md#firstcomposersort)
- [firstGenre](tag.md#firstgenre)
- [firstPerformer](tag.md#firstperformer)
- [firstPerformerSort](tag.md#firstperformersort)
- [genres](tag.md#genres)
- [grouping](tag.md#grouping)
- [initialKey](tag.md#initialkey)
- [isEmpty](tag.md#isempty)
- [isrc](tag.md#isrc)
- [joinedAlbumArtists](tag.md#joinedalbumartists)
- [joinedComposers](tag.md#joinedcomposers)
- [joinedGenres](tag.md#joinedgenres)
- [joinedPerformers](tag.md#joinedperformers)
- [joinedPerformersSort](tag.md#joinedperformerssort)
- [lyrics](tag.md#lyrics)
- [musicBrainzArtistId](tag.md#musicbrainzartistid)
- [musicBrainzDiscId](tag.md#musicbrainzdiscid)
- [musicBrainzReleaseArtistId](tag.md#musicbrainzreleaseartistid)
- [musicBrainzReleaseCountry](tag.md#musicbrainzreleasecountry)
- [musicBrainzReleaseGroupId](tag.md#musicbrainzreleasegroupid)
- [musicBrainzReleaseId](tag.md#musicbrainzreleaseid)
- [musicBrainzReleaseStatus](tag.md#musicbrainzreleasestatus)
- [musicBrainzReleaseType](tag.md#musicbrainzreleasetype)
- [musicBrainzTrackId](tag.md#musicbrainztrackid)
- [musicIpId](tag.md#musicipid)
- [performers](tag.md#performers)
- [performersRole](tag.md#performersrole)
- [performersSort](tag.md#performerssort)
- [pictures](tag.md#pictures)
- [publisher](tag.md#publisher)
- [remixedBy](tag.md#remixedby)
- [replayGainAlbumGain](tag.md#replaygainalbumgain)
- [replayGainAlbumPeak](tag.md#replaygainalbumpeak)
- [replayGainTrackGain](tag.md#replaygaintrackgain)
- [replayGainTrackPeak](tag.md#replaygaintrackpeak)
- [subtitle](tag.md#subtitle)
- [title](tag.md#title)
- [titleSort](tag.md#titlesort)
- [track](tag.md#track)
- [trackCount](tag.md#trackcount)
- [year](tag.md#year)

### Methods

- [clear](tag.md#clear)
- [copyTo](tag.md#copyto)
- [setInfoTag](tag.md#setinfotag)
- [firstInGroup](tag.md#firstingroup)
- [isFalsyOrLikeEmpty](tag.md#isfalsyorlikeempty)
- [joinGroup](tag.md#joingroup)

## Constructors

### constructor

\+ **new Tag**(): [*Tag*](tag.md)

**Returns:** [*Tag*](tag.md)

## Properties

### tagTypes

• `Abstract` **tagTypes**: [*TagTypes*](../enums/tagtypes.md)

Gets the tag types contained in the current instance. A bit wise combined [TagTypes](../enums/tagtypes.md)
containing the tag types contained in the current instance.

**`remarks`** For a standard tag, the value should be intuitive. For example, Id3v2Tag objects have
    a value of [TagTypes.Id3v2](../enums/tagtypes.md#id3v2). However, for CombinedTag type objects, they may
    contain multiple or no types.

## Accessors

### album

• **album**(): *string*

Gets the album of the media represented by the current instance. For video media, this
represents the collection the video belongs to.

**`remarks`** This field represents the name of the album the media belongs to. In the case of a
    boxed set, it should be the name of the entire set rather than the individual disc. In
    the case of a series, this should be the name of the series, rather than the season of a
    series.
    For example, "Kintsugi" (an album by Death Cab for Cutie), "The Complete Red Green Show"
    (a boxed set of TV episodes), or "Shark Tank" (a series with several seasons).

**Returns:** *string*

Album of the media represented by the current instance or `undefined` if no value
    is present

• **album**(`value`: *string*): *void*

Sets the album of the media represented by the current instance. For video media, this
represents the collection the video belongs to.

**`remarks`** This field represents the name of the album the media belongs to. In the case of a
    boxed set, it should be the name of the entire set rather than the individual disc. In
    the case of a series, this should be the name of the series, rather than the season of a
    series.
    For example, "Kintsugi" (an album by Death Cab for Cutie), "The Complete Red Green Show"
    (a boxed set of TV episodes), or "Shark Tank" (a series with several seasons).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | of the media represented by the current instance or `undefined` if no value     is present    |

**Returns:** *void*

Album of the media represented by the current instance or `undefined` if no value
    is present

___

### albumArtists

• **albumArtists**(): *string*[]

Gets the band or artist who is credited credited in the creation of the entire album or
collection containing the media described by the current instance.

**`remarks`** This field is typically optional but aids in the sorting of compilations or albums
    with multiple artist. For example, if an album has several artists, sorting by artist
    will split up albums by the same artist. Having a single album artist for an entire
    album solves this problem.
    As this value is to be used as a sorting key, it should be used with less variation
    than [performers](tag.md#performers). Where performers can be broken into multiple artists, it is
    best to stick to a single name. Eg, "Super8 & Tab"

**Returns:** *string*[]

Band or artist credited with the creation of the entire album or collection
    containing the media described by the current instance or an empty array if no value is
    present

• **albumArtists**(`value`: *string*[]): *void*

Sets the bands or artists who is credited credited in the creation of the entire album or
collection containing the media described by the current instance.

**`remarks`** This field is typically optional but aids in the sorting of compilations or albums
    with multiple artist. For example, if an album has several artists, sorting by artist
    will split up albums by the same artist. Having a single album artist for an entire
    album solves this problem.
    As this value is to be used as a sorting key, it should be used with less variation
    than [performers](tag.md#performers). Where performers can be broken into multiple artists, it is
    best to stick to a single name. Eg, "Super8 & Tab"

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string*[] | Band or artist credited with the creation of the entire album or collection     containing the media described by the current instance or an empty array if no value is     present    |

**Returns:** *void*

Band or artist credited with the creation of the entire album or collection
    containing the media described by the current instance or an empty array if no value is
    present

___

### albumArtistsSort

• **albumArtistsSort**(): *string*[]

Gets the sortable names of the bands/artists who are credited with creating the entire
album or collection containing the media described by the current instance.

**`see`** albumArtists

**`remarks`** This is used to provide more control over how the media is sorted. Typical uses are to
    skip articles or sort by last by last name. For example "Ben Folds" might be sorted as
    "Folds, Ben".
    As this value is to be used as a sorting key, it should be used with less variation than
    [performers](tag.md#performers). Where [performers](tag.md#performers) can be broken into multiple performers, it is
    best to stick to a single album artist. Eg, "Van Buuren, Armin"

**Returns:** *string*[]

Sortable names for the bands/artists are credited with the creation of the entire
    album or collection containing the media described by the current instance, or an empty
    array if no value is present.

• **albumArtistsSort**(`value`: *string*[]): *void*

Sets the sortable names of the bands/artists who are credited with creating the entire
album or collection containing the media described by the current instance.

**`see`** albumArtists

**`remarks`** This is used to provide more control over how the media is sorted. Typical uses are to
    skip articles or sort by last by last name. For example "Ben Folds" might be sorted as
    "Folds, Ben".
    As this value is to be used as a sorting key, it should be used with less variation than
    [performers](tag.md#performers). Where [performers](tag.md#performers) can be broken into multiple performers, it is
    best to stick to a single album artist. Eg, "Van Buuren, Armin"

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string*[] | Sortable names for the bands/artists are credited with the creation of the     entire album or collection containing the media described by the current instance, or an     empty array if no value is present.    |

**Returns:** *void*

Sortable names for the bands/artists are credited with the creation of the entire
    album or collection containing the media described by the current instance, or an empty
    array if no value is present.

___

### albumSort

• **albumSort**(): *string*

Gets the sortable name of the album title of the media represented by the current instance.

**`see`** album

**`remarks`** This field is typically optional but aids in sort of compilations or albums with
    similar titles.

**Returns:** *string*

Sortable name for the album title of the media or `undefined` if the value is not
    present

• **albumSort**(`value`: *string*): *void*

Sets the sortable name of the album title of the media represented by the current instance.

**`see`** album

**`remarks`** This field is typically optional but aids in sort of compilations or albums with
    similar titles.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | Sortable name for the album title of the media or `undefined` if the value is     not present    |

**Returns:** *void*

Sortable name for the album title of the media or `undefined` if the value is not
    present

___

### amazonId

• **amazonId**(): *string*

Gets the Amazon ID of the media represented by the current instance.

**`remarks`** This field represents the AmazonID, also called the ASIN, and is used to uniquely
    identify the particular track or album in the Amazon catalog.

**Returns:** *string*

Amazon ID of the media represented by the current instance or `undefined` if no
    value is present

• **amazonId**(`value`: *string*): *void*

Sets the Amazon ID of the media represented by the current instance.

**`remarks`** This field represents the AmazonID, also called the ASIN, and is used to uniquely
    identify the particular track or album in the Amazon catalog.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | Amazon ID of the media represented by the current instance or `undefined` if no     value is present    |

**Returns:** *void*

Amazon ID of the media represented by the current instance or `undefined` if no
    value is present

___

### beatsPerMinute

• **beatsPerMinute**(): *number*

Gets the number of beats per minute in the audio of the media represented by the current
instance.

**`remarks`** This field is useful for DJ's who are trying to beat match tracks. It should be
    calculated from the audio or pulled from a database.

**Returns:** *number*

Beats per minute of the audio in the media represented by the current instance, or
    `0` if not specified

• **beatsPerMinute**(`value`: *number*): *void*

Sets the number of beats per minute in the audio of the media represented by the current
instance.

**`remarks`** This field is useful for DJ's who are trying to beat match tracks. It should be
    calculated from the audio or pulled from a database.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *number* | Beats per minute of the audio in the media represented by the current instance,     or `0` if not specified    |

**Returns:** *void*

Beats per minute of the audio in the media represented by the current instance, or
    `0` if not specified

___

### comment

• **comment**(): *string*

Gets a user comment on the media represented by the current instance.

**`remarks`** This field should be used to store user notes and comments. There is no constraint on
    what text can be stored here, but it should not contain programmatic data.
    Because this field contains notes the the user might think of while consuming the media,
    it may be useful for an application to make this field easily accessible, perhaps even
    including it in the main interface.

**Returns:** *string*

User comments on the media represented by the current instance or `undefined` if
    the value is not present

• **comment**(`value`: *string*): *void*

Sets a user comment on the media represented by the current instance.

**`remarks`** This field should be used to store user notes and comments. There is no constraint on
    what text can be stored here, but it should not contain programmatic data.
    Because this field contains notes the the user might think of while consuming the media,
    it may be useful for an application to make this field easily accessible, perhaps even
    including it in the main interface.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | User comments on the media represented by the current instance or `undefined`     if the value is not present    |

**Returns:** *void*

User comments on the media represented by the current instance or `undefined` if
    the value is not present

___

### composers

• **composers**(): *string*[]

Gets the composers of the media represented by the current instance.

**`remarks`** This field represents the composers, song writers, script writers, or persons who
    claim authorship of the media.

**Returns:** *string*[]

Composers of the media represented by the current instance of an empty array if no
    value is present.

• **composers**(`value`: *string*[]): *void*

Sets the composers of the media represented by the current instance.

**`remarks`** This field represents the composers, song writers, script writers, or persons who
    claim authorship of the media.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string*[] | Composers of the media represented by the current instance of an empty array if     no value is present.    |

**Returns:** *void*

Composers of the media represented by the current instance of an empty array if no
    value is present.

___

### composersSort

• **composersSort**(): *string*[]

Gets the sortable names of the composers of the media represented by the current instance.

**`see`** composers

**`remarks`** This field is typically optional but aids in the sorting of compilations or albums
    with multiple composers.

**Returns:** *string*[]

Sortable names for the composers of the media represented by the current instance
    or an empty array if no value is present.

• **composersSort**(`value`: *string*[]): *void*

Sets the sortable names of the composers of the media represented by the current instance.

**`see`** composers

**`remarks`** This field is typically optional but aids in the sorting of compilations or albums
    with multiple composers.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string*[] | Sortable names for the composers of the media represented by the current     instance or an empty array if no value is present.    |

**Returns:** *void*

Sortable names for the composers of the media represented by the current instance
    or an empty array if no value is present.

___

### conductor

• **conductor**(): *string*

Gets the conductor or director of the media represented by the current instance.

**`remarks`** This field is most useful for organizing classical music and movies.

**Returns:** *string*

Conductor or director of the media represented by the current instance or
    `undefined` if no value present.

• **conductor**(`value`: *string*): *void*

Sets the conductor or director of the media represented by the current instance.

**`remarks`** This field is most useful for organizing classical music and movies.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | Conductor or director of the media represented by the current instance or     `undefined` if no value present.    |

**Returns:** *void*

Conductor or director of the media represented by the current instance or
    `undefined` if no value present.

___

### copyright

• **copyright**(): *string*

Gets the copyright information for the media represented by the current instance.

**`remarks`** This field should be used for storing copyright information. It may be useful to show
    this information somewhere in the program while the media is playing.
    Players should not support editing this field, but media creation tools should
    definitely allow modification.

**Returns:** *string*

Copyright information for the media represented by the current instance or
    `undefined` if no value is present.

• **copyright**(`value`: *string*): *void*

Sets the copyright information for the media represented by the current instance.

**`remarks`** This field should be used for storing copyright information. It may be useful to show
    this information somewhere in the program while the media is playing.
    Players should not support editing this field, but media creation tools should
    definitely allow modification.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | Copyright information for the media represented by the current instance or     `undefined` if no value is present.    |

**Returns:** *void*

Copyright information for the media represented by the current instance or
    `undefined` if no value is present.

___

### dateTagged

• **dateTagged**(): Date

Gets the date and time at which the tag has been written.

**Returns:** Date

Date/time at which the tag has been written, or `undefined` if no value is present

• **dateTagged**(`value`: Date): *void*

Sets the date and time at which the tag has been written.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | Date | Date/time at which the tag has been written, or `undefined` if no value is     present    |

**Returns:** *void*

Date/time at which the tag has been written, or `undefined` if no value is present

___

### description

• **description**(): *string*

Gets a short description of the media. For music, this could be the comment that the artist
made of his/her work. For a video, this should be a short summary of the story/plot, but
generally no spoliers. This should give the impression of what to expect in the media.

**`remarks`** This is especially relevant for a movie. For example, for "Fear and Loathing in Las
    Vegas", this could be "An oddball journalist and his psychopathic lawyer travel to Las
    Vegas for a series of psychedelic escapades."

**Returns:** *string*

Description of the media represented by the current instance or `undefined` if no
    value is present

• **description**(`value`: *string*): *void*

Sets a short description of the media. For music, this could be the comment that the artist
made of his/her work. For a video, this should be a short summary of the story/plot, but
generally no spoliers. This should give the impression of what to expect in the media.

**`remarks`** This is especially relevant for a movie. For example, for "Fear and Loathing in Las
    Vegas", this could be "An oddball journalist and his psychopathic lawyer travel to Las
    Vegas for a series of psychedelic escapades."

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | Description of the media represented by the current instance or `undefined` if     no value is present    |

**Returns:** *void*

Description of the media represented by the current instance or `undefined` if no
    value is present

___

### disc

• **disc**(): *number*

Gets the number of the disc containing the media represented by the current instance in the
boxed set. For a series, this represents the season number.

**`remarks`** This value should be the same as the number that appears on the disc. For example, if
    the disc is the first of three, the value should be `1`. It should be no more than
    [discCount](tag.md#disccount) if [discCount](tag.md#disccount) is non-zero.

**Returns:** *number*

Number of the disc or season of the media represented by the current instance in a
    boxed set.

• **disc**(`value`: *number*): *void*

Sets the number of the disc containing the media represented by the current instance in the
boxed set. For a series, this represents the season number.

**`remarks`** This value should be the same as the number that appears on the disc. For example, if
    the disc is the first of three, the value should be `1`. It should be no more than
    [discCount](tag.md#disccount) if [discCount](tag.md#disccount) is non-zero.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *number* | Number of the disc or season of the media represented by the current instance     in a boxed set.    |

**Returns:** *void*

Number of the disc or season of the media represented by the current instance in a
    boxed set.

___

### discCount

• **discCount**(): *number*

Gets the number of discs or seasons in the boxed set containing the media represented by the
current instance.

**`remarks`** If non-zero, this should be at least equal to [disc](tag.md#disc). If [disc](tag.md#disc) is zero,
    this value should also be zero.

**Returns:** *number*

Number of discs or seasons in the boxed set containing the media represented by the
    current instance or `0` if not specified.

• **discCount**(`value`: *number*): *void*

Sets the number of discs or seasons in the boxed set containing the media represented by the
current instance.

**`remarks`** If non-zero, this should be at least equal to [disc](tag.md#disc). If [disc](tag.md#disc) is zero,
    this value should also be zero.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *number* | Number of discs or seasons in the boxed set containing the media represented by     the current instance or `0` if not specified.    |

**Returns:** *void*

Number of discs or seasons in the boxed set containing the media represented by the
    current instance or `0` if not specified.

___

### firstAlbumArtist

• **firstAlbumArtist**(): *string*

Gets the the first value contained in [albumArtists](tag.md#albumartists).

**Returns:** *string*

___

### firstAlbumArtistSort

• **firstAlbumArtistSort**(): *string*

Gets the first value contained in [albumArtistsSort](tag.md#albumartistssort)

**Returns:** *string*

___

### firstComposer

• **firstComposer**(): *string*

Gets the first value contained in [composers](tag.md#composers)

**Returns:** *string*

___

### firstComposerSort

• **firstComposerSort**(): *string*

Gets the first value contained in [composersSort](tag.md#composerssort)

**Returns:** *string*

___

### firstGenre

• **firstGenre**(): *string*

Gets the first value contained in [genres](tag.md#genres)

**Returns:** *string*

___

### firstPerformer

• **firstPerformer**(): *string*

Gets the first value contained in [performers](tag.md#performers)

**Returns:** *string*

___

### firstPerformerSort

• **firstPerformerSort**(): *string*

Gets the first value contained in [performersSort](tag.md#performerssort)

**Returns:** *string*

___

### genres

• **genres**(): *string*[]

Gets the genres of the media represented by the current instance.

**`remarks`** This field represents genres that apply to the song, album, or video. This is often
    used for filtering media.
    A list of common audio genres as popularized by ID3v1 is stored in `genres.ts`.
    Additionally, `genres.ts` contains video genres as used by DivX.

**Returns:** *string*[]

Genres of the media represented by the current instance or an empty array if no
    value is present.

• **genres**(`value`: *string*[]): *void*

Sets the genres of the media represented by the current instance.

**`remarks`** This field represents genres that apply to the song, album, or video. This is often
    used for filtering media.
    A list of common audio genres as popularized by ID3v1 is stored in `genres.ts.
    Additionally, `genres.ts` contains video genres as used by DivX.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string*[] | Genres of the media represented by the current instance or an empty array if no     value is present.    |

**Returns:** *void*

Genres of the media represented by the current instance or an empty array if no
    value is present.

___

### grouping

• **grouping**(): *string*

Gets the grouping on the album which the media in the current instance belongs to.

**`remarks`** This field contains a non-physical group to which the track belongs. In classical
    music this could be a movement. It could also be parts of a series like "Introduction",
    "Closing Remarks", etc.

**Returns:** *string*

Grouping on the album which the media in the current instance belongs to or
    `undefined` if no value is present.

• **grouping**(`value`: *string*): *void*

Sets the grouping on the album which the media in the current instance belongs to.

**`remarks`** This field contains a non-physical group to which the track belongs. In classical
    music this could be a movement. It could also be parts of a series like "Introduction",
    "Closing Remarks", etc.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | Grouping on the album which the media in the current instance belongs to or     `undefined` if no value is present.    |

**Returns:** *void*

Grouping on the album which the media in the current instance belongs to or
    `undefined` if no value is present.

___

### initialKey

• **initialKey**(): *string*

Gets the initial key of the track.

**Returns:** *string*

Initial key of the track or `undefined` if no value is set

• **initialKey**(`value`: *string*): *void*

Sets the initial key of the track.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | Initial key of the track or `undefined` if no value is set    |

**Returns:** *void*

Initial key of the track or `undefined` if no value is set

___

### isEmpty

• **isEmpty**(): *boolean*

Gets whether or not the current instance is empty.

**`remarks`** In the default implementation, this checks the values supported by [Tag](tag.md), but it
    may be extended by child classes to support other values.

**Returns:** *boolean*

`true` if the current instance does not contain any values. `false` otherwise

___

### isrc

• **isrc**(): *string*

Gets the ISRC (International Standard Recording Code) of the track.

**Returns:** *string*

the ISRC of the track or `undefined` if no value is set

• **isrc**(`value`: *string*): *void*

Sets the ISRC (International Standard Recording Code) of the track.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | the ISRC of the track or `undefined` if no value is set    |

**Returns:** *void*

the ISRC of the track or `undefined` if no value is set

___

### joinedAlbumArtists

• **joinedAlbumArtists**(): *string*

Gets a semicolon and space separated string containing the values in [albumArtists](tag.md#albumartists)

**Returns:** *string*

___

### joinedComposers

• **joinedComposers**(): *string*

Gets a semicolon and space separated string containing the values in [composers](tag.md#composers)

**Returns:** *string*

___

### joinedGenres

• **joinedGenres**(): *string*

Gets a semicolon and space separated string containing the values in [genres](tag.md#genres)

**Returns:** *string*

___

### joinedPerformers

• **joinedPerformers**(): *string*

Gets a semicolon and space separated string containing the values in [performers](tag.md#performers)

**Returns:** *string*

___

### joinedPerformersSort

• **joinedPerformersSort**(): *string*

Gets a semicolon and space separated string containing the values in [performersSort](tag.md#performerssort)

**Returns:** *string*

___

### lyrics

• **lyrics**(): *string*

Gets the lyrics or script of the media represented by the current instance.

**`remarks`** This field contains a plain text representation of the lyrics or scripts with line
    breaks and whitespace being the only formatting marks.
    Some formats support more advanced lyrics, like synchronized lyrics, but those must be
    accessed using format-specific implementations.

**Returns:** *string*

Lyrics or script of the media represented by the current instance or `undefined` if
    no value is present

• **lyrics**(`value`: *string*): *void*

Sets the lyrics or script of the media represented by the current instance.

**`remarks`** This field contains a plain text representation of the lyrics or scripts with line
    breaks and whitespace being the only formatting marks.
    Some formats support more advanced lyrics, like synchronized lyrics, but those must be
    accessed using format-specific implementations.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | Lyrics or script of the media represented by the current instance or     `undefined` if no value is present    |

**Returns:** *void*

Lyrics or script of the media represented by the current instance or `undefined` if
    no value is present

___

### musicBrainzArtistId

• **musicBrainzArtistId**(): *string*

Gets the MusicBrainz artist ID of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz ArtistID, and is used to uniquely identify a
    particular artist of the track.

**Returns:** *string*

MusicBrainz ArtistID of the media represented by the current instance or
    `undefined` if no value is present

• **musicBrainzArtistId**(`value`: *string*): *void*

Sets the MusicBrainz artist ID of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz ArtistID, and is used to uniquely identify a
    particular artist of the track.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | MusicBrainz ArtistID of the media represented by the current instance or     `undefined` if no value is present    |

**Returns:** *void*

MusicBrainz ArtistID of the media represented by the current instance or
    `undefined` if no value is present

___

### musicBrainzDiscId

• **musicBrainzDiscId**(): *string*

Gets the MusicBrainz disc ID of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz DiscID and is used to uniquely identify the
    particular released media associated with this track.

**Returns:** *string*

MusicBrainz DiscID of the media represented by the current instance or `undefined`
    if no value is present

• **musicBrainzDiscId**(`value`: *string*): *void*

Sets the MusicBrainz disc ID of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz DiscID and is used to uniquely identify the
    particular released media associated with this track.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | MusicBrainz DiscID of the media represented by the current instance or     `undefined` if no value is present    |

**Returns:** *void*

MusicBrainz DiscID of the media represented by the current instance or `undefined`
    if no value is present

___

### musicBrainzReleaseArtistId

• **musicBrainzReleaseArtistId**(): *string*

Gets the MusicBrainz release artist ID of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz ReleaseArtistID, and is used to uniquely
    identify a particular album artist credited with the album.

**Returns:** *string*

MusicBrainz ReleaseArtistID of the media represented by the current instance or
    `undefined` if no value is present

• **musicBrainzReleaseArtistId**(`value`: *string*): *void*

Sets the MusicBrainz release artist ID of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz ReleaseArtistID, and is used to uniquely
    identify a particular album artist credited with the album.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | MusicBrainz ReleaseArtistID of the media represented by the current instance or     `undefined` if no value is present    |

**Returns:** *void*

MusicBrainz ReleaseArtistID of the media represented by the current instance or
    `undefined` if no value is present

___

### musicBrainzReleaseCountry

• **musicBrainzReleaseCountry**(): *string*

Gets the MusicBrainz release country of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz ReleaseCountry which describes the country in
    which an album was released. Note that the release country of an album is not
    necessarily the country in which it was produced. The label itself will typically be
    more relevant. Eg, a release on "Foo Records UK" that has "Made in Austria" printed on
    it will likely be a UK release.

**Returns:** *string*

MusicBrainz ReleaseCountry of the media represented by the current instance or
    `undefined` if no value is present

• **musicBrainzReleaseCountry**(`value`: *string*): *void*

Sets the MusicBrainz release country of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz ReleaseCountry which describes the country in
    which an album was released. Note that the release country of an album is not
    necessarily the country in which it was produced. The label itself will typically be
    more relevant. Eg, a release on "Foo Records UK" that has "Made in Austria" printed on
    it will likely be a UK release.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | MusicBrainz ReleaseCountry of the media represented by the current instance or     `undefined` if no value is present    |

**Returns:** *void*

MusicBrainz ReleaseCountry of the media represented by the current instance or
    `undefined` if no value is present

___

### musicBrainzReleaseGroupId

• **musicBrainzReleaseGroupId**(): *string*

Gets the MusicBrainz release group ID of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz ReleaseGroupID and is used to uniquely identify
    a particular release group to which this track belongs.

**Returns:** *string*

MusicBrainz ReleaseGroupID of the media represented by the current instance or
    `undefined` if no value is present

• **musicBrainzReleaseGroupId**(`value`: *string*): *void*

Sets the MusicBrainz release group ID of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz ReleaseGroupID and is used to uniquely identify
    a particular release group to which this track belongs.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | MusicBrainz ReleaseGroupID of the media represented by the current instance or     `undefined` if no value is present    |

**Returns:** *void*

MusicBrainz ReleaseGroupID of the media represented by the current instance or
    `undefined` if no value is present

___

### musicBrainzReleaseId

• **musicBrainzReleaseId**(): *string*

Gets the MusicBrainz release ID of the media represented by the current instance.

**`remarks`** This field represents the MusicBrains ReleaseID and is used to uniquely identify a
    particular release to which this track belongs.

**Returns:** *string*

MusicBrainz ReleaseID of the media represented by the current instance or
    `undefined` if no value is present

• **musicBrainzReleaseId**(`value`: *string*): *void*

Sets the MusicBrainz release ID of the media represented by the current instance.

**`remarks`** This field represents the MusicBrains ReleaseID and is used to uniquely identify a
    particular release to which this track belongs.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | MusicBrainz ReleaseID of the media represented by the current instance or     `undefined` if no value is present    |

**Returns:** *void*

MusicBrainz ReleaseID of the media represented by the current instance or
    `undefined` if no value is present

___

### musicBrainzReleaseStatus

• **musicBrainzReleaseStatus**(): *string*

Gets the MusicBrainz release status of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz ReleaseStatus used to describe how 'official' a
    release is. Common statuses are: `Official`, `Promotion`, `Bootleg`, `Pseudo-release`.

**Returns:** *string*

MusicBrainz ReleaseStatus of the media represented by the current instance or
    `undefined` if no value is present

• **musicBrainzReleaseStatus**(`value`: *string*): *void*

Sets the MusicBrainz release status of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz ReleaseStatus used to describe how 'official' a
    release is. Common statuses are: `Official`, `Promotion`, `Bootleg`, `Pseudo-release`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | MusicBrainz ReleaseStatus of the media represented by the current instance or     `undefined` if no value is present    |

**Returns:** *void*

MusicBrainz ReleaseStatus of the media represented by the current instance or
    `undefined` if no value is present

___

### musicBrainzReleaseType

• **musicBrainzReleaseType**(): *string*

Gets the MusicBrainz release type of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz ReleaseType that describes what kind of release
    a release is. Common types are: `Single`, `Album`, `EP`, `Compilation`, `Soundtrack,
    `SpokenWord`, `Interview`, `Audiobook`, `Live`, `Remix`, and `Other`. Careful thought
    must be given when using this field to decide if a particular track "is a compilation".

**Returns:** *string*

MusicBrainz ReleaseType of the media represented by the current instance or
    `undefined` if no value is present

• **musicBrainzReleaseType**(`value`: *string*): *void*

Sets the MusicBrainz release type of the media represented by the current instance.

**`remarks`** This field represents the MusicBrainz ReleaseType that describes what kind of release
    a release is. Common types are: `Single`, `Album`, `EP`, `Compilation`, `Soundtrack,
    `SpokenWord`, `Interview`, `Audiobook`, `Live`, `Remix`, and `Other`. Careful thought
    must be given when using this field to decide if a particular track "is a compilation".

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | MusicBrainz ReleaseType of the media represented by the current instance or     `undefined` if no value is present    |

**Returns:** *void*

MusicBrainz ReleaseType of the media represented by the current instance or
    `undefined` if no value is present

___

### musicBrainzTrackId

• **musicBrainzTrackId**(): *string*

Gets the MusicBrainz track ID of the media represented by the media represented by the
current instance.

**`remarks`** This field represents the MusicBrainz TrackID and is used to uniquely identify a
    particular track.

**Returns:** *string*

MusicBrainz TrackID of the media represented by the current instance or `undefined`
    if no value is present

• **musicBrainzTrackId**(`value`: *string*): *void*

Sets the MusicBrainz track ID of the media represented by the media represented by the
current instance.

**`remarks`** This field represents the MusicBrainz TrackID and is used to uniquely identify a
    particular track.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | MusicBrainz TrackID of the media represented by the current instance or     `undefined` if no value is present    |

**Returns:** *void*

MusicBrainz TrackID of the media represented by the current instance or `undefined`
    if no value is present

___

### musicIpId

• **musicIpId**(): *string*

Gets the MusicIP PUID of the media represented by the current instance.

**`remarks`** This field represents the MusicIP PUID, an acoustic fingerprint identifier. It
    identifies wht this track "sounds like".

**Returns:** *string*

MusicIP PUID of the media represented by the current instance or `undefined` if no
    value is present

• **musicIpId**(`value`: *string*): *void*

Sets the MusicIP PUID of the media represented by the current instance.

**`remarks`** This field represents the MusicIP PUID, an acoustic fingerprint identifier. It
    identifies wht this track "sounds like".

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | MusicIP PUID of the media represented by the current instance or `undefined`     if no value is present    |

**Returns:** *void*

MusicIP PUID of the media represented by the current instance or `undefined` if no
    value is present

___

### performers

• **performers**(): *string*[]

Gets the performers or artists who performed in the media described by the current instance.

**`remarks`** This field is most commonly called "Artists" in audio media or "Actors" in video
    media, and should be used to represent each artist/actor appearing in the media. It can
    be simple in the form of "Above & Beyond" or more complicated in the form of
    "Jono Grant, Tony McGuinness, Paavo Siljamäki", depending on the preferences of the
    user and the degree to which they organize their media collection.
    As the preference of the user may vary, applications should avoid limiting the user in
    what constitutes the performers field - especially with regards to number of performers.

**Returns:** *string*[]

Performers who performed in the media described by the current instance or an empty
    array if no value is present.

• **performers**(`value`: *string*[]): *void*

Sets the performers or artists who performed in the media described by the current instance.

**`remarks`** This field is most commonly called "Artists" in audio media or "Actors" in video
    media, and should be used to represent each artist/actor appearing in the media. It can
    be simple in the form of "Above & Beyond" or more complicated in the form of
    "Jono Grant, Tony McGuinness, Paavo Siljamäki", depending on the preferences of the
    user and the degree to which they organize their media collection.
    As the preference of the user may vary, applications should avoid limiting the user in
    what constitutes the performers field - especially with regards to number of performers.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string*[] | Performers who performed in the media described by the current instance or an     empty array if no value is present.    |

**Returns:** *void*

Performers who performed in the media described by the current instance or an empty
    array if no value is present.

___

### performersRole

• **performersRole**(): *string*[]

Gets the characters portrayed by an actor for a video or instruments played by a musician
for music. This must match the [performers](tag.md#performers) array (for each person, correspond one/more
role). Several roles for the same artist/actor can be separated with semicolons. For
example: "Bass; Backing Vocals; Vibraphone".

**`remarks`** It is highly important to match each role to the performers. This means that an entry
    in the [performersRole](tag.md#performersrole) array is `undefined` to maintain the relationship between
    `performers[i]` and `performersRole[i]`.

**Returns:** *string*[]

Array containing the roles played by the performers in the media described by the
    current instance, or an empty array if no value is present.

• **performersRole**(`value`: *string*[]): *void*

Sets the characters portrayed by an actor for a video or instruments played by a musician
for music. This must match the [performers](tag.md#performers) array (for each person, correspond one/more
role). Several roles for the same artist/actor can be separated with semicolons. For
example: "Bass; Backing Vocals; Vibraphone".

**`remarks`** It is highly important to match each role to the performers. This means that an entry
    in the [performersRole](tag.md#performersrole) array is `undefined` to maintain the relationship between
    `performers[i]` and `performersRole[i]`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string*[] | Array containing the roles played by the performers in the media described by     the current instance, or an empty array if no value is present.    |

**Returns:** *void*

Array containing the roles played by the performers in the media described by the
    current instance, or an empty array if no value is present.

___

### performersSort

• **performersSort**(): *string*[]

Gets the sortable names of the performers or artists who performed in the media described by
the current instance.

**`remarks`** This is used to provide more control over how the media is sorted. Typical uses are to
    skip articles or sort by last name. For example, "The Pillows" might be sorted as
    "Pillows, The".

**`see`** performers

**Returns:** *string*[]

Sortable names for the performers who performed in the media described by the
    current instance, or an empty array if no value is present.

• **performersSort**(`value`: *string*[]): *void*

Gets the sortable names of the performers or artists who performed in the media described by
the current instance.

**`remarks`** This is used to provide more control over how the media is sorted. Typical uses are to
    skip articles or sort by last name. For example, "The Pillows" might be sorted as
    "Pillows, The".

**`see`** performers

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string*[] | Sortable names for the performers who performed in the media described by the     current instance, or an empty array if no value is present.    |

**Returns:** *void*

Sortable names for the performers who performed in the media described by the
    current instance, or an empty array if no value is present.

___

### pictures

• **pictures**(): [*IPicture*](../interfaces/ipicture.md)[]

Gets a collection of pictures associated with the media represented by the current instance.

**`remarks`** Typically, this value is used to store an album cover or icon to use for the file, but
    it is capable of holding any type of image or file, including pictures of the band, the
    recording studio, the concert, etc.

**Returns:** [*IPicture*](../interfaces/ipicture.md)[]

Array containing a collection of pictures associated with the media represented by
    the current instance or an empty array if no pictures are present.

• **pictures**(`value`: [*IPicture*](../interfaces/ipicture.md)[]): *void*

Sets a collection of pictures associated with the media represented by the current instance.

**`remarks`** Typically, this value is used to store an album cover or icon to use for the file, but
    it is capable of holding any type of image or file, including pictures of the band, the
    recording studio, the concert, etc.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | [*IPicture*](../interfaces/ipicture.md)[] | Array containing a collection of pictures associated with the media represented by     the current instance or an empty array if no pictures are present.    |

**Returns:** *void*

Array containing a collection of pictures associated with the media represented by
    the current instance or an empty array if no pictures are present.

___

### publisher

• **publisher**(): *string*

Gets the publisher of the track.

**Returns:** *string*

Publisher of the track or `undefined` if no value is set

• **publisher**(`value`: *string*): *void*

Sets the publisher of the track.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | Publisher of the track or `undefined` if no value is set    |

**Returns:** *void*

Publisher of the track or `undefined` if no value is set

___

### remixedBy

• **remixedBy**(): *string*

Gets the remixer of the track.

**Returns:** *string*

Remixer of the track or `undefined` if no value is set

• **remixedBy**(`value`: *string*): *void*

Sets the remixer of the track.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | Remixer of the track or `undefined` if no value is set    |

**Returns:** *void*

Remixer of the track or `undefined` if no value is set

___

### replayGainAlbumGain

• **replayGainAlbumGain**(): *number*

Gets the ReplayGain album gain in dB.

**Returns:** *number*

Album gain as per the ReplayGain specifications, in dB, or `NaN` if no value is set

• **replayGainAlbumGain**(`value`: *number*): *void*

Sets the ReplayGain album gain in dB.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *number* | Album gain as per the ReplayGain specifications, in dB, or `NaN` if no value is     set    |

**Returns:** *void*

Album gain as per the ReplayGain specifications, in dB, or `NaN` if no value is set

___

### replayGainAlbumPeak

• **replayGainAlbumPeak**(): *number*

Gets the ReplayGain album peak sample.

**Returns:** *number*

Album peak as per the ReplayGain specifications, or `NaN` if no value is set

• **replayGainAlbumPeak**(`value`: *number*): *void*

Sets the ReplayGain album peak sample.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *number* | Album peak as per the ReplayGain specifications, or `NaN` if no value is set    |

**Returns:** *void*

Album peak as per the ReplayGain specifications, or `NaN` if no value is set

___

### replayGainTrackGain

• **replayGainTrackGain**(): *number*

Gets the ReplayGain track gain in dB.

**Returns:** *number*

Track gain as per ReplayGain specifications, in dB, or `NaN` if no value is set

• **replayGainTrackGain**(`value`: *number*): *void*

Sets the ReplayGain track gain in dB.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *number* | Track gain as per ReplayGain specifications, in dB, or `NaN` if no value is set    |

**Returns:** *void*

Track gain as per ReplayGain specifications, in dB, or `NaN` if no value is set

___

### replayGainTrackPeak

• **replayGainTrackPeak**(): *number*

Gets the ReplayGain track peak sample.

**Returns:** *number*

Track peak as per the ReplayGain specifications, or `NaN` if no value is set

• **replayGainTrackPeak**(`value`: *number*): *void*

Sets the ReplayGain track peak sample.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *number* | Track peak as per the ReplayGain specifications, or `NaN` if no value is set    |

**Returns:** *void*

Track peak as per the ReplayGain specifications, or `NaN` if no value is set

___

### subtitle

• **subtitle**(): *string*

Gets a description, one-line. It represents the tagline of the vide/music.

**`remarks`** This field gives a nice/short precision to the title, which is typically below the
    title on the front cover of the media. For example for "Ocean's 13", this would be
    "Revenge is a funny thing".

**Returns:** *string*

Subtitle of the media represented by the current instance or `undefined` if no
    value is present

• **subtitle**(`value`: *string*): *void*

Sets a description, one-line. It represents the tagline of the vide/music.

**`remarks`** This field gives a nice/short precision to the title, which is typically below the
    title on the front cover of the media. For example for "Ocean's 13", this would be
    "Revenge is a funny thing".

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | Subtitle of the media represented by the current instance or `undefined` if no     value is present    |

**Returns:** *void*

Subtitle of the media represented by the current instance or `undefined` if no
    value is present

___

### title

• **title**(): *string*

Gets the title for the media described by the current instance.

**`remarks`** The title is most commonly the name of the song, episode or a movie title. For example
    "Time Won't Me Go" (a song by The Bravery), "Three Stories" (an episode of House MD), or
    "Fear and Loathing In Las Vegas" (a movie).

**Returns:** *string*

Title of the media described by the current instance or `undefined` if no value is
    present.

• **title**(`value`: *string*): *void*

Sets the title for the media described by the current instance.

**`remarks`** The title is most commonly the name of the song, episode or a movie title. For example
    "Time Won't Me Go" (a song by The Bravery), "Three Stories" (an episode of House MD), or
    "Fear and Loathing In Las Vegas" (a movie).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | Title of the media described by the current instance or `undefined` if no value     is present.    |

**Returns:** *void*

Title of the media described by the current instance or `undefined` if no value is
    present.

___

### titleSort

• **titleSort**(): *string*

Gets the sortable name for the title of the media described by the current instance.

**`remarks`** Possibly used to sort compilations or episodic content.

**Returns:** *string*

Sortable name of the media described by the current instance or `undefined` if no
    value is present

• **titleSort**(`value`: *string*): *void*

Sets the sortable name for the title of the media described by the current instance.

**`remarks`** Possibly used to sort compilations or episodic content.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* | Sortable name of the media described by the current instance or `undefined` if     no value is present    |

**Returns:** *void*

Sortable name of the media described by the current instance or `undefined` if no
    value is present

___

### track

• **track**(): *number*

Gets the position of the media represented by the current instance in its containing album
or season (for a series).

**`remarks`** This value should be the same as is listed on the album cover and no more than
    [trackCount](tag.md#trackcount), if [trackCount](tag.md#trackcount) is non-zero.
    Most tagging formats store this as a string. To help sorting, a two-digit zero-padded
    value is used in the resulting tag.
    For a series, this property represents the episodes in a season of the series.

**Returns:** *number*

Position of the media represented by the current instance in its containing album
    or `0` if not specified.

• **track**(`value`: *number*): *void*

Sets the position of the media represented by the current instance in its containing album
or season (for a series).

**`remarks`** This value should be the same as is listed on the album cover and no more than
    [trackCount](tag.md#trackcount), if [trackCount](tag.md#trackcount) is non-zero.
    Most tagging formats store this as a string. To help sorting, a two-digit zero-padded
    value is used in the resulting tag.
    For a series, this property represents the episodes in a season of the series.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *number* | Position of the media represented by the current instance in its containing     album or `0` if not specified.    |

**Returns:** *void*

Position of the media represented by the current instance in its containing album
    or `0` if not specified.

___

### trackCount

• **trackCount**(): *number*

Gets the number of tracks in the album or the number of episodes in a series of the media
represented by the current instance.

**`remarks`** If non-zero, this value should be equal to or greater than [track](tag.md#track). If
    [track](tag.md#track) is `0`, this value should also be `0`.

**Returns:** *number*

Number of tracks in the album or number of episodes in a series of the media
    represented by the current instance or `0` if not specified.

• **trackCount**(`value`: *number*): *void*

Sets the number of tracks in the album or the number of episodes in a series of the media
represented by the current instance.

**`remarks`** If non-zero, this value should be equal to or greater than [track](tag.md#track). If
    [track](tag.md#track) is `0`, this value should also be `0`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *number* | Number of tracks in the album or number of episodes in a series of the media     represented by the current instance or `0` if not specified.    |

**Returns:** *void*

Number of tracks in the album or number of episodes in a series of the media
    represented by the current instance or `0` if not specified.

___

### year

• **year**(): *number*

Gets the year that the media represented by the current instance was recorded.

**`remarks`** Years greater than 9999 cannot be stored by most tagging formats and will be cleared
    if a higher value is set. Some tagging formats store higher precision dates which will
    be truncated when this property is set. Format specific implementations are necessary to
    access the higher precision values.

**Returns:** *number*

Year that the media represented by the current instance was created or `0` if no
    value is present.

• **year**(`value`: *number*): *void*

Sets the year that the media represented by the current instance was recorded.

**`remarks`** Years greater than 9999 cannot be stored by most tagging formats and will be cleared
    if a higher value is set. Some tagging formats store higher precision dates which will
    be truncated when this property is set. Format specific implementations are necessary to
    access the higher precision values.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *number* | Year that the media represented by the current instance was created or `0` if no     value is present.    |

**Returns:** *void*

Year that the media represented by the current instance was created or `0` if no
    value is present.

## Methods

### clear

▸ `Abstract`**clear**(): *void*

Clears all values stored in the current instance.

**`remarks`** The clearing procedure is format specific and should clear all values.

**Returns:** *void*

___

### copyTo

▸ **copyTo**(`target`: [*Tag*](tag.md), `overwrite`: *boolean*): *void*

Copies the values from the current instance to another [Tag](tag.md), optionally overwriting
    existing values.

**`remarks`** This method only copies the mist basic values when copying between different tag
    formats. However, if `target` is of the same type as the current instance,
    more advanced copying may be done. For example if both `this` and `target` are
    [Id3v2Tag](id3v2tag.md), all frames will be copied to the target.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`target` | [*Tag*](tag.md) | Target tag to copy values to   |
`overwrite` | *boolean* | Whether or not to copy values over existing ones    |

**Returns:** *void*

___

### setInfoTag

▸ **setInfoTag**(): *void*

Set the tags that represent the tagger software (node-taglib-sharp) itself.

**`remarks`** This is typically a method to call just before saving a tag.

**Returns:** *void*

___

### firstInGroup

▸ `Protected` `Static`**firstInGroup**(`group`: *string*[]): *string*

Gets the first string in an array.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`group` | *string*[] | Array of strings to get the first string from.   |

**Returns:** *string*

First string contained in `group` or `undefined` if the array is
    `undefined` or empty

___

### isFalsyOrLikeEmpty

▸ `Protected` `Static`**isFalsyOrLikeEmpty**(`value`: *string* \| *string*[]): *boolean*

Checks if a value is falsy or empty.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | *string* \| *string*[] | Object to check   |

**Returns:** *boolean*

If `value` is a string, `true` is returned if the value is falsy or all
    whitespace, `false` is returned otherwise. If `value` is an array of strings,
    the array must be falsy or all elements must be falsy or whitespace to return `true`.

___

### joinGroup

▸ `Protected` `Static`**joinGroup**(`group`: *string*[]): *string*

Joins an array of string into a single, semicolon and space separated string.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`group` | *string*[] | Array of string to join   |

**Returns:** *string*

A semicolon and space separated string containing the values from `group`
    or undefined if the array is `undefined` or empty.
