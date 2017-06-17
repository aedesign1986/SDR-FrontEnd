
export class DayReport {

  // TODO Declare Model Properties and Functions

  public id: string;

  public reportDate: string;
  public completed: boolean;
  public sended: boolean;
  public scrumQuestions: ScrumQuestions;

}

export class ScrumQuestions {
  whatYesterday: string;
  whatToday: string;
  areImpediments: string;
}
