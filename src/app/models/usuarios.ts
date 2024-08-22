export interface IUsuario {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: data[];
  support: Support;
}

export interface data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}
