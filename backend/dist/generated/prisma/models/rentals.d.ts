import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type rentalsModel = runtime.Types.Result.DefaultSelection<Prisma.$rentalsPayload>;
export type AggregateRentals = {
    _count: RentalsCountAggregateOutputType | null;
    _avg: RentalsAvgAggregateOutputType | null;
    _sum: RentalsSumAggregateOutputType | null;
    _min: RentalsMinAggregateOutputType | null;
    _max: RentalsMaxAggregateOutputType | null;
};
export type RentalsAvgAggregateOutputType = {
    id: number | null;
    car_id: number | null;
};
export type RentalsSumAggregateOutputType = {
    id: number | null;
    car_id: number | null;
};
export type RentalsMinAggregateOutputType = {
    id: number | null;
    car_id: number | null;
    start_date: Date | null;
    end_date: Date | null;
};
export type RentalsMaxAggregateOutputType = {
    id: number | null;
    car_id: number | null;
    start_date: Date | null;
    end_date: Date | null;
};
export type RentalsCountAggregateOutputType = {
    id: number;
    car_id: number;
    start_date: number;
    end_date: number;
    _all: number;
};
export type RentalsAvgAggregateInputType = {
    id?: true;
    car_id?: true;
};
export type RentalsSumAggregateInputType = {
    id?: true;
    car_id?: true;
};
export type RentalsMinAggregateInputType = {
    id?: true;
    car_id?: true;
    start_date?: true;
    end_date?: true;
};
export type RentalsMaxAggregateInputType = {
    id?: true;
    car_id?: true;
    start_date?: true;
    end_date?: true;
};
export type RentalsCountAggregateInputType = {
    id?: true;
    car_id?: true;
    start_date?: true;
    end_date?: true;
    _all?: true;
};
export type RentalsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rentalsWhereInput;
    orderBy?: Prisma.rentalsOrderByWithRelationInput | Prisma.rentalsOrderByWithRelationInput[];
    cursor?: Prisma.rentalsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RentalsCountAggregateInputType;
    _avg?: RentalsAvgAggregateInputType;
    _sum?: RentalsSumAggregateInputType;
    _min?: RentalsMinAggregateInputType;
    _max?: RentalsMaxAggregateInputType;
};
export type GetRentalsAggregateType<T extends RentalsAggregateArgs> = {
    [P in keyof T & keyof AggregateRentals]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRentals[P]> : Prisma.GetScalarType<T[P], AggregateRentals[P]>;
};
export type rentalsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rentalsWhereInput;
    orderBy?: Prisma.rentalsOrderByWithAggregationInput | Prisma.rentalsOrderByWithAggregationInput[];
    by: Prisma.RentalsScalarFieldEnum[] | Prisma.RentalsScalarFieldEnum;
    having?: Prisma.rentalsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RentalsCountAggregateInputType | true;
    _avg?: RentalsAvgAggregateInputType;
    _sum?: RentalsSumAggregateInputType;
    _min?: RentalsMinAggregateInputType;
    _max?: RentalsMaxAggregateInputType;
};
export type RentalsGroupByOutputType = {
    id: number;
    car_id: number;
    start_date: Date | null;
    end_date: Date | null;
    _count: RentalsCountAggregateOutputType | null;
    _avg: RentalsAvgAggregateOutputType | null;
    _sum: RentalsSumAggregateOutputType | null;
    _min: RentalsMinAggregateOutputType | null;
    _max: RentalsMaxAggregateOutputType | null;
};
type GetRentalsGroupByPayload<T extends rentalsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RentalsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RentalsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RentalsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RentalsGroupByOutputType[P]>;
}>>;
export type rentalsWhereInput = {
    AND?: Prisma.rentalsWhereInput | Prisma.rentalsWhereInput[];
    OR?: Prisma.rentalsWhereInput[];
    NOT?: Prisma.rentalsWhereInput | Prisma.rentalsWhereInput[];
    id?: Prisma.IntFilter<"rentals"> | number;
    car_id?: Prisma.IntFilter<"rentals"> | number;
    start_date?: Prisma.DateTimeNullableFilter<"rentals"> | Date | string | null;
    end_date?: Prisma.DateTimeNullableFilter<"rentals"> | Date | string | null;
    car?: Prisma.XOR<Prisma.CarsScalarRelationFilter, Prisma.carsWhereInput>;
};
export type rentalsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    car_id?: Prisma.SortOrder;
    start_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    end_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    car?: Prisma.carsOrderByWithRelationInput;
};
export type rentalsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.rentalsWhereInput | Prisma.rentalsWhereInput[];
    OR?: Prisma.rentalsWhereInput[];
    NOT?: Prisma.rentalsWhereInput | Prisma.rentalsWhereInput[];
    car_id?: Prisma.IntFilter<"rentals"> | number;
    start_date?: Prisma.DateTimeNullableFilter<"rentals"> | Date | string | null;
    end_date?: Prisma.DateTimeNullableFilter<"rentals"> | Date | string | null;
    car?: Prisma.XOR<Prisma.CarsScalarRelationFilter, Prisma.carsWhereInput>;
}, "id">;
export type rentalsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    car_id?: Prisma.SortOrder;
    start_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    end_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.rentalsCountOrderByAggregateInput;
    _avg?: Prisma.rentalsAvgOrderByAggregateInput;
    _max?: Prisma.rentalsMaxOrderByAggregateInput;
    _min?: Prisma.rentalsMinOrderByAggregateInput;
    _sum?: Prisma.rentalsSumOrderByAggregateInput;
};
export type rentalsScalarWhereWithAggregatesInput = {
    AND?: Prisma.rentalsScalarWhereWithAggregatesInput | Prisma.rentalsScalarWhereWithAggregatesInput[];
    OR?: Prisma.rentalsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rentalsScalarWhereWithAggregatesInput | Prisma.rentalsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"rentals"> | number;
    car_id?: Prisma.IntWithAggregatesFilter<"rentals"> | number;
    start_date?: Prisma.DateTimeNullableWithAggregatesFilter<"rentals"> | Date | string | null;
    end_date?: Prisma.DateTimeNullableWithAggregatesFilter<"rentals"> | Date | string | null;
};
export type rentalsCreateInput = {
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    car: Prisma.carsCreateNestedOneWithoutRentalsInput;
};
export type rentalsUncheckedCreateInput = {
    id?: number;
    car_id: number;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
};
export type rentalsUpdateInput = {
    start_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    car?: Prisma.carsUpdateOneRequiredWithoutRentalsNestedInput;
};
export type rentalsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    car_id?: Prisma.IntFieldUpdateOperationsInput | number;
    start_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type rentalsCreateManyInput = {
    id?: number;
    car_id: number;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
};
export type rentalsUpdateManyMutationInput = {
    start_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type rentalsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    car_id?: Prisma.IntFieldUpdateOperationsInput | number;
    start_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RentalsListRelationFilter = {
    every?: Prisma.rentalsWhereInput;
    some?: Prisma.rentalsWhereInput;
    none?: Prisma.rentalsWhereInput;
};
export type rentalsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type rentalsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    car_id?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
};
export type rentalsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    car_id?: Prisma.SortOrder;
};
export type rentalsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    car_id?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
};
export type rentalsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    car_id?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
};
export type rentalsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    car_id?: Prisma.SortOrder;
};
export type rentalsCreateNestedManyWithoutCarInput = {
    create?: Prisma.XOR<Prisma.rentalsCreateWithoutCarInput, Prisma.rentalsUncheckedCreateWithoutCarInput> | Prisma.rentalsCreateWithoutCarInput[] | Prisma.rentalsUncheckedCreateWithoutCarInput[];
    connectOrCreate?: Prisma.rentalsCreateOrConnectWithoutCarInput | Prisma.rentalsCreateOrConnectWithoutCarInput[];
    createMany?: Prisma.rentalsCreateManyCarInputEnvelope;
    connect?: Prisma.rentalsWhereUniqueInput | Prisma.rentalsWhereUniqueInput[];
};
export type rentalsUncheckedCreateNestedManyWithoutCarInput = {
    create?: Prisma.XOR<Prisma.rentalsCreateWithoutCarInput, Prisma.rentalsUncheckedCreateWithoutCarInput> | Prisma.rentalsCreateWithoutCarInput[] | Prisma.rentalsUncheckedCreateWithoutCarInput[];
    connectOrCreate?: Prisma.rentalsCreateOrConnectWithoutCarInput | Prisma.rentalsCreateOrConnectWithoutCarInput[];
    createMany?: Prisma.rentalsCreateManyCarInputEnvelope;
    connect?: Prisma.rentalsWhereUniqueInput | Prisma.rentalsWhereUniqueInput[];
};
export type rentalsUpdateManyWithoutCarNestedInput = {
    create?: Prisma.XOR<Prisma.rentalsCreateWithoutCarInput, Prisma.rentalsUncheckedCreateWithoutCarInput> | Prisma.rentalsCreateWithoutCarInput[] | Prisma.rentalsUncheckedCreateWithoutCarInput[];
    connectOrCreate?: Prisma.rentalsCreateOrConnectWithoutCarInput | Prisma.rentalsCreateOrConnectWithoutCarInput[];
    upsert?: Prisma.rentalsUpsertWithWhereUniqueWithoutCarInput | Prisma.rentalsUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: Prisma.rentalsCreateManyCarInputEnvelope;
    set?: Prisma.rentalsWhereUniqueInput | Prisma.rentalsWhereUniqueInput[];
    disconnect?: Prisma.rentalsWhereUniqueInput | Prisma.rentalsWhereUniqueInput[];
    delete?: Prisma.rentalsWhereUniqueInput | Prisma.rentalsWhereUniqueInput[];
    connect?: Prisma.rentalsWhereUniqueInput | Prisma.rentalsWhereUniqueInput[];
    update?: Prisma.rentalsUpdateWithWhereUniqueWithoutCarInput | Prisma.rentalsUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: Prisma.rentalsUpdateManyWithWhereWithoutCarInput | Prisma.rentalsUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: Prisma.rentalsScalarWhereInput | Prisma.rentalsScalarWhereInput[];
};
export type rentalsUncheckedUpdateManyWithoutCarNestedInput = {
    create?: Prisma.XOR<Prisma.rentalsCreateWithoutCarInput, Prisma.rentalsUncheckedCreateWithoutCarInput> | Prisma.rentalsCreateWithoutCarInput[] | Prisma.rentalsUncheckedCreateWithoutCarInput[];
    connectOrCreate?: Prisma.rentalsCreateOrConnectWithoutCarInput | Prisma.rentalsCreateOrConnectWithoutCarInput[];
    upsert?: Prisma.rentalsUpsertWithWhereUniqueWithoutCarInput | Prisma.rentalsUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: Prisma.rentalsCreateManyCarInputEnvelope;
    set?: Prisma.rentalsWhereUniqueInput | Prisma.rentalsWhereUniqueInput[];
    disconnect?: Prisma.rentalsWhereUniqueInput | Prisma.rentalsWhereUniqueInput[];
    delete?: Prisma.rentalsWhereUniqueInput | Prisma.rentalsWhereUniqueInput[];
    connect?: Prisma.rentalsWhereUniqueInput | Prisma.rentalsWhereUniqueInput[];
    update?: Prisma.rentalsUpdateWithWhereUniqueWithoutCarInput | Prisma.rentalsUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: Prisma.rentalsUpdateManyWithWhereWithoutCarInput | Prisma.rentalsUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: Prisma.rentalsScalarWhereInput | Prisma.rentalsScalarWhereInput[];
};
export type rentalsCreateWithoutCarInput = {
    start_date?: Date | string | null;
    end_date?: Date | string | null;
};
export type rentalsUncheckedCreateWithoutCarInput = {
    id?: number;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
};
export type rentalsCreateOrConnectWithoutCarInput = {
    where: Prisma.rentalsWhereUniqueInput;
    create: Prisma.XOR<Prisma.rentalsCreateWithoutCarInput, Prisma.rentalsUncheckedCreateWithoutCarInput>;
};
export type rentalsCreateManyCarInputEnvelope = {
    data: Prisma.rentalsCreateManyCarInput | Prisma.rentalsCreateManyCarInput[];
    skipDuplicates?: boolean;
};
export type rentalsUpsertWithWhereUniqueWithoutCarInput = {
    where: Prisma.rentalsWhereUniqueInput;
    update: Prisma.XOR<Prisma.rentalsUpdateWithoutCarInput, Prisma.rentalsUncheckedUpdateWithoutCarInput>;
    create: Prisma.XOR<Prisma.rentalsCreateWithoutCarInput, Prisma.rentalsUncheckedCreateWithoutCarInput>;
};
export type rentalsUpdateWithWhereUniqueWithoutCarInput = {
    where: Prisma.rentalsWhereUniqueInput;
    data: Prisma.XOR<Prisma.rentalsUpdateWithoutCarInput, Prisma.rentalsUncheckedUpdateWithoutCarInput>;
};
export type rentalsUpdateManyWithWhereWithoutCarInput = {
    where: Prisma.rentalsScalarWhereInput;
    data: Prisma.XOR<Prisma.rentalsUpdateManyMutationInput, Prisma.rentalsUncheckedUpdateManyWithoutCarInput>;
};
export type rentalsScalarWhereInput = {
    AND?: Prisma.rentalsScalarWhereInput | Prisma.rentalsScalarWhereInput[];
    OR?: Prisma.rentalsScalarWhereInput[];
    NOT?: Prisma.rentalsScalarWhereInput | Prisma.rentalsScalarWhereInput[];
    id?: Prisma.IntFilter<"rentals"> | number;
    car_id?: Prisma.IntFilter<"rentals"> | number;
    start_date?: Prisma.DateTimeNullableFilter<"rentals"> | Date | string | null;
    end_date?: Prisma.DateTimeNullableFilter<"rentals"> | Date | string | null;
};
export type rentalsCreateManyCarInput = {
    id?: number;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
};
export type rentalsUpdateWithoutCarInput = {
    start_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type rentalsUncheckedUpdateWithoutCarInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    start_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type rentalsUncheckedUpdateManyWithoutCarInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    start_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type rentalsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    car_id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    car?: boolean | Prisma.carsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rentals"]>;
export type rentalsSelectScalar = {
    id?: boolean;
    car_id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
};
export type rentalsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "car_id" | "start_date" | "end_date", ExtArgs["result"]["rentals"]>;
export type rentalsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    car?: boolean | Prisma.carsDefaultArgs<ExtArgs>;
};
export type $rentalsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "rentals";
    objects: {
        car: Prisma.$carsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        car_id: number;
        start_date: Date | null;
        end_date: Date | null;
    }, ExtArgs["result"]["rentals"]>;
    composites: {};
};
export type rentalsGetPayload<S extends boolean | null | undefined | rentalsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rentalsPayload, S>;
export type rentalsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rentalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RentalsCountAggregateInputType | true;
};
export interface rentalsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['rentals'];
        meta: {
            name: 'rentals';
        };
    };
    findUnique<T extends rentalsFindUniqueArgs>(args: Prisma.SelectSubset<T, rentalsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rentalsClient<runtime.Types.Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends rentalsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rentalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rentalsClient<runtime.Types.Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends rentalsFindFirstArgs>(args?: Prisma.SelectSubset<T, rentalsFindFirstArgs<ExtArgs>>): Prisma.Prisma__rentalsClient<runtime.Types.Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends rentalsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rentalsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rentalsClient<runtime.Types.Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends rentalsFindManyArgs>(args?: Prisma.SelectSubset<T, rentalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends rentalsCreateArgs>(args: Prisma.SelectSubset<T, rentalsCreateArgs<ExtArgs>>): Prisma.Prisma__rentalsClient<runtime.Types.Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends rentalsCreateManyArgs>(args?: Prisma.SelectSubset<T, rentalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends rentalsDeleteArgs>(args: Prisma.SelectSubset<T, rentalsDeleteArgs<ExtArgs>>): Prisma.Prisma__rentalsClient<runtime.Types.Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends rentalsUpdateArgs>(args: Prisma.SelectSubset<T, rentalsUpdateArgs<ExtArgs>>): Prisma.Prisma__rentalsClient<runtime.Types.Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends rentalsDeleteManyArgs>(args?: Prisma.SelectSubset<T, rentalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends rentalsUpdateManyArgs>(args: Prisma.SelectSubset<T, rentalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends rentalsUpsertArgs>(args: Prisma.SelectSubset<T, rentalsUpsertArgs<ExtArgs>>): Prisma.Prisma__rentalsClient<runtime.Types.Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends rentalsCountArgs>(args?: Prisma.Subset<T, rentalsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RentalsCountAggregateOutputType> : number>;
    aggregate<T extends RentalsAggregateArgs>(args: Prisma.Subset<T, RentalsAggregateArgs>): Prisma.PrismaPromise<GetRentalsAggregateType<T>>;
    groupBy<T extends rentalsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rentalsGroupByArgs['orderBy'];
    } : {
        orderBy?: rentalsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rentalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: rentalsFieldRefs;
}
export interface Prisma__rentalsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    car<T extends Prisma.carsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.carsDefaultArgs<ExtArgs>>): Prisma.Prisma__carsClient<runtime.Types.Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface rentalsFieldRefs {
    readonly id: Prisma.FieldRef<"rentals", 'Int'>;
    readonly car_id: Prisma.FieldRef<"rentals", 'Int'>;
    readonly start_date: Prisma.FieldRef<"rentals", 'DateTime'>;
    readonly end_date: Prisma.FieldRef<"rentals", 'DateTime'>;
}
export type rentalsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalsSelect<ExtArgs> | null;
    omit?: Prisma.rentalsOmit<ExtArgs> | null;
    include?: Prisma.rentalsInclude<ExtArgs> | null;
    where: Prisma.rentalsWhereUniqueInput;
};
export type rentalsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalsSelect<ExtArgs> | null;
    omit?: Prisma.rentalsOmit<ExtArgs> | null;
    include?: Prisma.rentalsInclude<ExtArgs> | null;
    where: Prisma.rentalsWhereUniqueInput;
};
export type rentalsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalsSelect<ExtArgs> | null;
    omit?: Prisma.rentalsOmit<ExtArgs> | null;
    include?: Prisma.rentalsInclude<ExtArgs> | null;
    where?: Prisma.rentalsWhereInput;
    orderBy?: Prisma.rentalsOrderByWithRelationInput | Prisma.rentalsOrderByWithRelationInput[];
    cursor?: Prisma.rentalsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RentalsScalarFieldEnum | Prisma.RentalsScalarFieldEnum[];
};
export type rentalsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalsSelect<ExtArgs> | null;
    omit?: Prisma.rentalsOmit<ExtArgs> | null;
    include?: Prisma.rentalsInclude<ExtArgs> | null;
    where?: Prisma.rentalsWhereInput;
    orderBy?: Prisma.rentalsOrderByWithRelationInput | Prisma.rentalsOrderByWithRelationInput[];
    cursor?: Prisma.rentalsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RentalsScalarFieldEnum | Prisma.RentalsScalarFieldEnum[];
};
export type rentalsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalsSelect<ExtArgs> | null;
    omit?: Prisma.rentalsOmit<ExtArgs> | null;
    include?: Prisma.rentalsInclude<ExtArgs> | null;
    where?: Prisma.rentalsWhereInput;
    orderBy?: Prisma.rentalsOrderByWithRelationInput | Prisma.rentalsOrderByWithRelationInput[];
    cursor?: Prisma.rentalsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RentalsScalarFieldEnum | Prisma.RentalsScalarFieldEnum[];
};
export type rentalsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalsSelect<ExtArgs> | null;
    omit?: Prisma.rentalsOmit<ExtArgs> | null;
    include?: Prisma.rentalsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rentalsCreateInput, Prisma.rentalsUncheckedCreateInput>;
};
export type rentalsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.rentalsCreateManyInput | Prisma.rentalsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type rentalsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalsSelect<ExtArgs> | null;
    omit?: Prisma.rentalsOmit<ExtArgs> | null;
    include?: Prisma.rentalsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rentalsUpdateInput, Prisma.rentalsUncheckedUpdateInput>;
    where: Prisma.rentalsWhereUniqueInput;
};
export type rentalsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.rentalsUpdateManyMutationInput, Prisma.rentalsUncheckedUpdateManyInput>;
    where?: Prisma.rentalsWhereInput;
    limit?: number;
};
export type rentalsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalsSelect<ExtArgs> | null;
    omit?: Prisma.rentalsOmit<ExtArgs> | null;
    include?: Prisma.rentalsInclude<ExtArgs> | null;
    where: Prisma.rentalsWhereUniqueInput;
    create: Prisma.XOR<Prisma.rentalsCreateInput, Prisma.rentalsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.rentalsUpdateInput, Prisma.rentalsUncheckedUpdateInput>;
};
export type rentalsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalsSelect<ExtArgs> | null;
    omit?: Prisma.rentalsOmit<ExtArgs> | null;
    include?: Prisma.rentalsInclude<ExtArgs> | null;
    where: Prisma.rentalsWhereUniqueInput;
};
export type rentalsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rentalsWhereInput;
    limit?: number;
};
export type rentalsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rentalsSelect<ExtArgs> | null;
    omit?: Prisma.rentalsOmit<ExtArgs> | null;
    include?: Prisma.rentalsInclude<ExtArgs> | null;
};
export {};
