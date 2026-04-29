import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type carsModel = runtime.Types.Result.DefaultSelection<Prisma.$carsPayload>;
export type AggregateCars = {
    _count: CarsCountAggregateOutputType | null;
    _avg: CarsAvgAggregateOutputType | null;
    _sum: CarsSumAggregateOutputType | null;
    _min: CarsMinAggregateOutputType | null;
    _max: CarsMaxAggregateOutputType | null;
};
export type CarsAvgAggregateOutputType = {
    id: number | null;
    daily_cost: number | null;
};
export type CarsSumAggregateOutputType = {
    id: number | null;
    daily_cost: number | null;
};
export type CarsMinAggregateOutputType = {
    id: number | null;
    license_plate_number: string | null;
    brand: string | null;
    model: string | null;
    daily_cost: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CarsMaxAggregateOutputType = {
    id: number | null;
    license_plate_number: string | null;
    brand: string | null;
    model: string | null;
    daily_cost: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CarsCountAggregateOutputType = {
    id: number;
    license_plate_number: number;
    brand: number;
    model: number;
    daily_cost: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type CarsAvgAggregateInputType = {
    id?: true;
    daily_cost?: true;
};
export type CarsSumAggregateInputType = {
    id?: true;
    daily_cost?: true;
};
export type CarsMinAggregateInputType = {
    id?: true;
    license_plate_number?: true;
    brand?: true;
    model?: true;
    daily_cost?: true;
    created_at?: true;
    updated_at?: true;
};
export type CarsMaxAggregateInputType = {
    id?: true;
    license_plate_number?: true;
    brand?: true;
    model?: true;
    daily_cost?: true;
    created_at?: true;
    updated_at?: true;
};
export type CarsCountAggregateInputType = {
    id?: true;
    license_plate_number?: true;
    brand?: true;
    model?: true;
    daily_cost?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type CarsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carsWhereInput;
    orderBy?: Prisma.carsOrderByWithRelationInput | Prisma.carsOrderByWithRelationInput[];
    cursor?: Prisma.carsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CarsCountAggregateInputType;
    _avg?: CarsAvgAggregateInputType;
    _sum?: CarsSumAggregateInputType;
    _min?: CarsMinAggregateInputType;
    _max?: CarsMaxAggregateInputType;
};
export type GetCarsAggregateType<T extends CarsAggregateArgs> = {
    [P in keyof T & keyof AggregateCars]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCars[P]> : Prisma.GetScalarType<T[P], AggregateCars[P]>;
};
export type carsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carsWhereInput;
    orderBy?: Prisma.carsOrderByWithAggregationInput | Prisma.carsOrderByWithAggregationInput[];
    by: Prisma.CarsScalarFieldEnum[] | Prisma.CarsScalarFieldEnum;
    having?: Prisma.carsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarsCountAggregateInputType | true;
    _avg?: CarsAvgAggregateInputType;
    _sum?: CarsSumAggregateInputType;
    _min?: CarsMinAggregateInputType;
    _max?: CarsMaxAggregateInputType;
};
export type CarsGroupByOutputType = {
    id: number;
    license_plate_number: string | null;
    brand: string | null;
    model: string | null;
    daily_cost: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: CarsCountAggregateOutputType | null;
    _avg: CarsAvgAggregateOutputType | null;
    _sum: CarsSumAggregateOutputType | null;
    _min: CarsMinAggregateOutputType | null;
    _max: CarsMaxAggregateOutputType | null;
};
type GetCarsGroupByPayload<T extends carsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CarsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CarsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CarsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CarsGroupByOutputType[P]>;
}>>;
export type carsWhereInput = {
    AND?: Prisma.carsWhereInput | Prisma.carsWhereInput[];
    OR?: Prisma.carsWhereInput[];
    NOT?: Prisma.carsWhereInput | Prisma.carsWhereInput[];
    id?: Prisma.IntFilter<"cars"> | number;
    license_plate_number?: Prisma.StringNullableFilter<"cars"> | string | null;
    brand?: Prisma.StringNullableFilter<"cars"> | string | null;
    model?: Prisma.StringNullableFilter<"cars"> | string | null;
    daily_cost?: Prisma.IntNullableFilter<"cars"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"cars"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"cars"> | Date | string | null;
    rentals?: Prisma.RentalsListRelationFilter;
};
export type carsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    license_plate_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    brand?: Prisma.SortOrderInput | Prisma.SortOrder;
    model?: Prisma.SortOrderInput | Prisma.SortOrder;
    daily_cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    rentals?: Prisma.rentalsOrderByRelationAggregateInput;
    _relevance?: Prisma.carsOrderByRelevanceInput;
};
export type carsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.carsWhereInput | Prisma.carsWhereInput[];
    OR?: Prisma.carsWhereInput[];
    NOT?: Prisma.carsWhereInput | Prisma.carsWhereInput[];
    license_plate_number?: Prisma.StringNullableFilter<"cars"> | string | null;
    brand?: Prisma.StringNullableFilter<"cars"> | string | null;
    model?: Prisma.StringNullableFilter<"cars"> | string | null;
    daily_cost?: Prisma.IntNullableFilter<"cars"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"cars"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"cars"> | Date | string | null;
    rentals?: Prisma.RentalsListRelationFilter;
}, "id">;
export type carsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    license_plate_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    brand?: Prisma.SortOrderInput | Prisma.SortOrder;
    model?: Prisma.SortOrderInput | Prisma.SortOrder;
    daily_cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.carsCountOrderByAggregateInput;
    _avg?: Prisma.carsAvgOrderByAggregateInput;
    _max?: Prisma.carsMaxOrderByAggregateInput;
    _min?: Prisma.carsMinOrderByAggregateInput;
    _sum?: Prisma.carsSumOrderByAggregateInput;
};
export type carsScalarWhereWithAggregatesInput = {
    AND?: Prisma.carsScalarWhereWithAggregatesInput | Prisma.carsScalarWhereWithAggregatesInput[];
    OR?: Prisma.carsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.carsScalarWhereWithAggregatesInput | Prisma.carsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"cars"> | number;
    license_plate_number?: Prisma.StringNullableWithAggregatesFilter<"cars"> | string | null;
    brand?: Prisma.StringNullableWithAggregatesFilter<"cars"> | string | null;
    model?: Prisma.StringNullableWithAggregatesFilter<"cars"> | string | null;
    daily_cost?: Prisma.IntNullableWithAggregatesFilter<"cars"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"cars"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"cars"> | Date | string | null;
};
export type carsCreateInput = {
    license_plate_number?: string | null;
    brand?: string | null;
    model?: string | null;
    daily_cost?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    rentals?: Prisma.rentalsCreateNestedManyWithoutCarInput;
};
export type carsUncheckedCreateInput = {
    id?: number;
    license_plate_number?: string | null;
    brand?: string | null;
    model?: string | null;
    daily_cost?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    rentals?: Prisma.rentalsUncheckedCreateNestedManyWithoutCarInput;
};
export type carsUpdateInput = {
    license_plate_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    daily_cost?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rentals?: Prisma.rentalsUpdateManyWithoutCarNestedInput;
};
export type carsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    license_plate_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    daily_cost?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rentals?: Prisma.rentalsUncheckedUpdateManyWithoutCarNestedInput;
};
export type carsCreateManyInput = {
    id?: number;
    license_plate_number?: string | null;
    brand?: string | null;
    model?: string | null;
    daily_cost?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type carsUpdateManyMutationInput = {
    license_plate_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    daily_cost?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type carsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    license_plate_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    daily_cost?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type carsOrderByRelevanceInput = {
    fields: Prisma.carsOrderByRelevanceFieldEnum | Prisma.carsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type carsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    license_plate_number?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    daily_cost?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type carsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    daily_cost?: Prisma.SortOrder;
};
export type carsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    license_plate_number?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    daily_cost?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type carsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    license_plate_number?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    daily_cost?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type carsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    daily_cost?: Prisma.SortOrder;
};
export type CarsScalarRelationFilter = {
    is?: Prisma.carsWhereInput;
    isNot?: Prisma.carsWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type carsCreateNestedOneWithoutRentalsInput = {
    create?: Prisma.XOR<Prisma.carsCreateWithoutRentalsInput, Prisma.carsUncheckedCreateWithoutRentalsInput>;
    connectOrCreate?: Prisma.carsCreateOrConnectWithoutRentalsInput;
    connect?: Prisma.carsWhereUniqueInput;
};
export type carsUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: Prisma.XOR<Prisma.carsCreateWithoutRentalsInput, Prisma.carsUncheckedCreateWithoutRentalsInput>;
    connectOrCreate?: Prisma.carsCreateOrConnectWithoutRentalsInput;
    upsert?: Prisma.carsUpsertWithoutRentalsInput;
    connect?: Prisma.carsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.carsUpdateToOneWithWhereWithoutRentalsInput, Prisma.carsUpdateWithoutRentalsInput>, Prisma.carsUncheckedUpdateWithoutRentalsInput>;
};
export type carsCreateWithoutRentalsInput = {
    license_plate_number?: string | null;
    brand?: string | null;
    model?: string | null;
    daily_cost?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type carsUncheckedCreateWithoutRentalsInput = {
    id?: number;
    license_plate_number?: string | null;
    brand?: string | null;
    model?: string | null;
    daily_cost?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type carsCreateOrConnectWithoutRentalsInput = {
    where: Prisma.carsWhereUniqueInput;
    create: Prisma.XOR<Prisma.carsCreateWithoutRentalsInput, Prisma.carsUncheckedCreateWithoutRentalsInput>;
};
export type carsUpsertWithoutRentalsInput = {
    update: Prisma.XOR<Prisma.carsUpdateWithoutRentalsInput, Prisma.carsUncheckedUpdateWithoutRentalsInput>;
    create: Prisma.XOR<Prisma.carsCreateWithoutRentalsInput, Prisma.carsUncheckedCreateWithoutRentalsInput>;
    where?: Prisma.carsWhereInput;
};
export type carsUpdateToOneWithWhereWithoutRentalsInput = {
    where?: Prisma.carsWhereInput;
    data: Prisma.XOR<Prisma.carsUpdateWithoutRentalsInput, Prisma.carsUncheckedUpdateWithoutRentalsInput>;
};
export type carsUpdateWithoutRentalsInput = {
    license_plate_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    daily_cost?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type carsUncheckedUpdateWithoutRentalsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    license_plate_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    daily_cost?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CarsCountOutputType = {
    rentals: number;
};
export type CarsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rentals?: boolean | CarsCountOutputTypeCountRentalsArgs;
};
export type CarsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarsCountOutputTypeSelect<ExtArgs> | null;
};
export type CarsCountOutputTypeCountRentalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rentalsWhereInput;
};
export type carsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    license_plate_number?: boolean;
    brand?: boolean;
    model?: boolean;
    daily_cost?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    rentals?: boolean | Prisma.cars$rentalsArgs<ExtArgs>;
    _count?: boolean | Prisma.CarsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cars"]>;
export type carsSelectScalar = {
    id?: boolean;
    license_plate_number?: boolean;
    brand?: boolean;
    model?: boolean;
    daily_cost?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type carsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "license_plate_number" | "brand" | "model" | "daily_cost" | "created_at" | "updated_at", ExtArgs["result"]["cars"]>;
export type carsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rentals?: boolean | Prisma.cars$rentalsArgs<ExtArgs>;
    _count?: boolean | Prisma.CarsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $carsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cars";
    objects: {
        rentals: Prisma.$rentalsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        license_plate_number: string | null;
        brand: string | null;
        model: string | null;
        daily_cost: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["cars"]>;
    composites: {};
};
export type carsGetPayload<S extends boolean | null | undefined | carsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$carsPayload, S>;
export type carsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<carsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CarsCountAggregateInputType | true;
};
export interface carsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cars'];
        meta: {
            name: 'cars';
        };
    };
    findUnique<T extends carsFindUniqueArgs>(args: Prisma.SelectSubset<T, carsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__carsClient<runtime.Types.Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends carsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, carsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__carsClient<runtime.Types.Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends carsFindFirstArgs>(args?: Prisma.SelectSubset<T, carsFindFirstArgs<ExtArgs>>): Prisma.Prisma__carsClient<runtime.Types.Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends carsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, carsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__carsClient<runtime.Types.Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends carsFindManyArgs>(args?: Prisma.SelectSubset<T, carsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends carsCreateArgs>(args: Prisma.SelectSubset<T, carsCreateArgs<ExtArgs>>): Prisma.Prisma__carsClient<runtime.Types.Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends carsCreateManyArgs>(args?: Prisma.SelectSubset<T, carsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends carsDeleteArgs>(args: Prisma.SelectSubset<T, carsDeleteArgs<ExtArgs>>): Prisma.Prisma__carsClient<runtime.Types.Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends carsUpdateArgs>(args: Prisma.SelectSubset<T, carsUpdateArgs<ExtArgs>>): Prisma.Prisma__carsClient<runtime.Types.Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends carsDeleteManyArgs>(args?: Prisma.SelectSubset<T, carsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends carsUpdateManyArgs>(args: Prisma.SelectSubset<T, carsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends carsUpsertArgs>(args: Prisma.SelectSubset<T, carsUpsertArgs<ExtArgs>>): Prisma.Prisma__carsClient<runtime.Types.Result.GetResult<Prisma.$carsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends carsCountArgs>(args?: Prisma.Subset<T, carsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CarsCountAggregateOutputType> : number>;
    aggregate<T extends CarsAggregateArgs>(args: Prisma.Subset<T, CarsAggregateArgs>): Prisma.PrismaPromise<GetCarsAggregateType<T>>;
    groupBy<T extends carsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: carsGroupByArgs['orderBy'];
    } : {
        orderBy?: carsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, carsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: carsFieldRefs;
}
export interface Prisma__carsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rentals<T extends Prisma.cars$rentalsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cars$rentalsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rentalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface carsFieldRefs {
    readonly id: Prisma.FieldRef<"cars", 'Int'>;
    readonly license_plate_number: Prisma.FieldRef<"cars", 'String'>;
    readonly brand: Prisma.FieldRef<"cars", 'String'>;
    readonly model: Prisma.FieldRef<"cars", 'String'>;
    readonly daily_cost: Prisma.FieldRef<"cars", 'Int'>;
    readonly created_at: Prisma.FieldRef<"cars", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"cars", 'DateTime'>;
}
export type carsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carsSelect<ExtArgs> | null;
    omit?: Prisma.carsOmit<ExtArgs> | null;
    include?: Prisma.carsInclude<ExtArgs> | null;
    where: Prisma.carsWhereUniqueInput;
};
export type carsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carsSelect<ExtArgs> | null;
    omit?: Prisma.carsOmit<ExtArgs> | null;
    include?: Prisma.carsInclude<ExtArgs> | null;
    where: Prisma.carsWhereUniqueInput;
};
export type carsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carsSelect<ExtArgs> | null;
    omit?: Prisma.carsOmit<ExtArgs> | null;
    include?: Prisma.carsInclude<ExtArgs> | null;
    where?: Prisma.carsWhereInput;
    orderBy?: Prisma.carsOrderByWithRelationInput | Prisma.carsOrderByWithRelationInput[];
    cursor?: Prisma.carsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarsScalarFieldEnum | Prisma.CarsScalarFieldEnum[];
};
export type carsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carsSelect<ExtArgs> | null;
    omit?: Prisma.carsOmit<ExtArgs> | null;
    include?: Prisma.carsInclude<ExtArgs> | null;
    where?: Prisma.carsWhereInput;
    orderBy?: Prisma.carsOrderByWithRelationInput | Prisma.carsOrderByWithRelationInput[];
    cursor?: Prisma.carsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarsScalarFieldEnum | Prisma.CarsScalarFieldEnum[];
};
export type carsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carsSelect<ExtArgs> | null;
    omit?: Prisma.carsOmit<ExtArgs> | null;
    include?: Prisma.carsInclude<ExtArgs> | null;
    where?: Prisma.carsWhereInput;
    orderBy?: Prisma.carsOrderByWithRelationInput | Prisma.carsOrderByWithRelationInput[];
    cursor?: Prisma.carsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarsScalarFieldEnum | Prisma.CarsScalarFieldEnum[];
};
export type carsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carsSelect<ExtArgs> | null;
    omit?: Prisma.carsOmit<ExtArgs> | null;
    include?: Prisma.carsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.carsCreateInput, Prisma.carsUncheckedCreateInput>;
};
export type carsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.carsCreateManyInput | Prisma.carsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type carsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carsSelect<ExtArgs> | null;
    omit?: Prisma.carsOmit<ExtArgs> | null;
    include?: Prisma.carsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.carsUpdateInput, Prisma.carsUncheckedUpdateInput>;
    where: Prisma.carsWhereUniqueInput;
};
export type carsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.carsUpdateManyMutationInput, Prisma.carsUncheckedUpdateManyInput>;
    where?: Prisma.carsWhereInput;
    limit?: number;
};
export type carsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carsSelect<ExtArgs> | null;
    omit?: Prisma.carsOmit<ExtArgs> | null;
    include?: Prisma.carsInclude<ExtArgs> | null;
    where: Prisma.carsWhereUniqueInput;
    create: Prisma.XOR<Prisma.carsCreateInput, Prisma.carsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.carsUpdateInput, Prisma.carsUncheckedUpdateInput>;
};
export type carsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carsSelect<ExtArgs> | null;
    omit?: Prisma.carsOmit<ExtArgs> | null;
    include?: Prisma.carsInclude<ExtArgs> | null;
    where: Prisma.carsWhereUniqueInput;
};
export type carsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carsWhereInput;
    limit?: number;
};
export type cars$rentalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type carsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carsSelect<ExtArgs> | null;
    omit?: Prisma.carsOmit<ExtArgs> | null;
    include?: Prisma.carsInclude<ExtArgs> | null;
};
export {};
