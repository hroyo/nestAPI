import { ApiProperty } from "@nestjs/swagger";

export class DelegateVoteDto {

    @ApiProperty({ type: String, required: true, default: "My Address" })
    address: string;
    @ApiProperty({ type: String, required: true, default: "My signature" })
    signature: string;
}
