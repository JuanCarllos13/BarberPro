export interface ScheduleItem{
  id: string;
  customer: string;
  haircut:{
    id: string;
    name: string;
    price: string | number;
    user_id: string;
  }
}