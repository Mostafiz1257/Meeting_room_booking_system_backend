// import { Schema, model } from "mongoose";
// import { IRoom } from "./room.interface";

// const roomSchema = new Schema<IRoom>({
//     name: { type: String, required: true },
//     roomNo: { type: Number, required: true },
//     floorNo: { type: Number, required: true },
//     capacity: { type: Number, required: true },
//     pricePerSlot: { type: Number, required: true },
//     amenities: { type: [String], required: true },
//     isDeleted: { type: Boolean, default: false }, 
//     image:{type :String, required:false}   
// })


// export const Room = model<IRoom>('Room', roomSchema)


import { Schema, model } from "mongoose";
import { IRoom } from "./room.interface";

const roomSchema = new Schema<IRoom>({
    name: { type: String, required: true },
    roomNo: { type: Number, required: true },
    floorNo: { type: Number, required: true },
    capacity: { type: Number, required: true },
    pricePerSlot: { type: Number, required: true },
    amenities: { type: [String], required: true },
    isDeleted: { type: Boolean, default: false }, 
    image: { type: [String], required: false }  
});

export const Room = model<IRoom>('Room', roomSchema);
