export type Event = {
    id: string;
    date: string;
    description: string;
};

export type TimeInterval = {
    id: string;
    label: string;
    startYear: number;
    endYear: number;
    events: Event[];
};
