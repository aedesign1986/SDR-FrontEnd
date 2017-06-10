import { JiraTask } from './jiratask.model';

export class ToDo {

  // Relationship Section
  public id: string;
  public user: string;
  public project: string;

  // Status of To Do
  private completed: boolean;
  private started: boolean;
  private completedAt: string;
  private createdAt: string;
  private modified: string;

  // General Information
  public title: string;
  public description: string;
  public status: string;
  public statusDesc: string;

  public jira: JiraTask;



}

  //  "issue": {
  // "name": "ISSUE01",
  //    "path": "UrlPath"
