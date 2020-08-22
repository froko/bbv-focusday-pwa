export interface TimeSlot {
  id: string;
  slot: string;
}

export class Session {
  public id: string;
  public title: string;
  public speakers: string;
  public hasDescription: boolean;
  private timeslot: string;

  constructor(session: any) {
    this.id = session.id;
    this.title = session.title;
    this.speakers = session.speakers.join(', ');
    this.hasDescription = session.description !== '';
    this.timeslot = session.timeslot;
  }

  has(timeSlot: TimeSlot): boolean {
    return this.timeslot === timeSlot.id;
  }
}
