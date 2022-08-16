export interface Orders {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: AssignedOrder[];
  status: string;
  priority: string;
}

export interface AssignedOrder {
  person_name: string;
  status: string;
}

export interface ResponseOrder {
  response: {
    data: Orders[]
  }
}
