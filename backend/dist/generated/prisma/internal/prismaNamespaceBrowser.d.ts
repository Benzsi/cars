import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    #private: any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    #private: any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    #private: any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly cars: "cars";
    readonly rentals: "rentals";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CarsScalarFieldEnum: {
    readonly id: "id";
    readonly license_plate_number: "license_plate_number";
    readonly brand: "brand";
    readonly model: "model";
    readonly daily_cost: "daily_cost";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CarsScalarFieldEnum = (typeof CarsScalarFieldEnum)[keyof typeof CarsScalarFieldEnum];
export declare const RentalsScalarFieldEnum: {
    readonly id: "id";
    readonly car_id: "car_id";
    readonly start_date: "start_date";
    readonly end_date: "end_date";
};
export type RentalsScalarFieldEnum = (typeof RentalsScalarFieldEnum)[keyof typeof RentalsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const carsOrderByRelevanceFieldEnum: {
    readonly license_plate_number: "license_plate_number";
    readonly brand: "brand";
    readonly model: "model";
};
export type carsOrderByRelevanceFieldEnum = (typeof carsOrderByRelevanceFieldEnum)[keyof typeof carsOrderByRelevanceFieldEnum];
