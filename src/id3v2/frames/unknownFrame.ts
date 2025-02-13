import {ByteVector} from "../../byteVector";
import {Frame, FrameClassType} from "./frame";
import {Id3v2FrameHeader} from "./frameHeader";
import {FrameIdentifier} from "../frameIdentifiers";
import {Guards} from "../../utils";

/**
 * Fallback type when no other frame class works for a given frame.
 */
export default class UnknownFrame extends Frame {
    private constructor(header: Id3v2FrameHeader) {
        super(header);
    }

    /**
     * Constructs and initializes a new instance with a specified type
     * @param identifier ID3v2 frame identifier
     * @param data Contents of the frame
     */
    public static fromData(identifier: FrameIdentifier, data?: ByteVector): UnknownFrame {
        Guards.truthy(identifier, "identifier");

        const frame = new UnknownFrame(new Id3v2FrameHeader(identifier));
        if (data) {
            frame.data = data;
        } else {
            frame.data = undefined;
        }
        return frame;
    }

    /**
     * Constructs and initializes a new instance by reading its raw data in a specified ID3v2
     * version. This method allows for offset reading from the data bytevector.
     * @param data Raw representation of the new frame
     * @param offset What offset in `data` the frame actually begins. Must be positive,
     *     safe integer
     * @param header Header of the frame found at `data` in the data
     * @param version ID3v2 version the frame was originally encoded with
     */
    public static fromOffsetRawData(
        data: ByteVector,
        offset: number,
        header: Id3v2FrameHeader,
        version: number
    ): UnknownFrame {
        Guards.truthy(data, "data");
        Guards.uint(offset, "offset");
        Guards.truthy(header, "header");
        Guards.byte(version, "version");

        const frame = new UnknownFrame(header);
        frame.setData(data, offset, false, version);
        return frame;
    }

    /**
     * Constructs and initializes a new instance by reading its raw data in a specified
     * ID3v2 version.
     * @param data Raw representation of the new frame
     * @param version ID3v2 version the raw frame is encoded with, must be a positive 8-bit integer
     */
    public static fromRawData(data: ByteVector, version: number): UnknownFrame {
        Guards.truthy(data, "data");
        Guards.byte(version, "version");

        const frame = new UnknownFrame(Id3v2FrameHeader.fromData(data, version));
        frame.setData(data, 0, true, version);
        return frame;
    }

    /** @inheritDoc */
    public get frameClassType(): FrameClassType { return FrameClassType.UnknownFrame; }

    /**
     * Gets and sets the field data in the current instance
     */
    public data: ByteVector;

    /** @inheritDoc */
    public clone(): Frame {
        return UnknownFrame.fromData(this._header.frameId, this.data);
    }

    /** @inheritDoc */
    protected parseFields(data: ByteVector, _version: number): void {
        this.data = data;
    }

    /** @inheritDoc */
    protected renderFields(_version: number): ByteVector {
        return this.data || ByteVector.empty();
    }
}
