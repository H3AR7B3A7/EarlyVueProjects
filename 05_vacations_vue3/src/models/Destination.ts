export interface Destination {
    id: number;
    country: string;
    city: string;
    hotel: string;
    rating: Rating;
    pic: string;
}

type Rating = 0 | 1 | 2 | 3 | 4 | 5;