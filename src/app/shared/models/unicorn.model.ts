export interface Unicorn {
    id: number;
    name: string;
    birthyear: number;
    weight: number;
    photo: string;
    hobbies: string[];
    capacities: number[];
}

export interface UnicornWithCapacitiesLabels extends Unicorn {
    capacitiesLabels: string[];
}

// export type UnicornWithCapacitiesLabels = Unicorn & { capacitiesLabels: string[] };
