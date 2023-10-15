export interface Room {
    id:            string;
    user_name:     string;
    room_question: RoomQuestion[];
    key:           string;
    name:          string;
    status:        boolean;
    created_at:    Date;
    creator:       string;
    enable_voting: boolean;
    owner:         boolean;
}

export interface RoomQuestion {
    id:         string;
    votes:      Votes;
    question:   string;
    created_at: Date;
    room:       string;
}

export interface Votes {
    approve:    number;
    disapprove: number;
}