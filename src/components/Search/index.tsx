import { TypeSearchFor } from "@/types";

type PropsSearch = {
  searchFor: TypeSearchFor;
  query: string;
  pageIndex: number;
};

export default function Search({ searchFor, query, pageIndex }: PropsSearch) {
    //TODO: criar este componente para receber os dados de search, realizar uma busca de dados via cliente consumindo o endpoint criado em /search/[from], usando swr, criar uma loading ui otimista para user, tratamento de error, paginar os resultados do user aqui de acordo com o searchFor informado, cada um tem um tipo de card de renderização ver como fazer isso
}
