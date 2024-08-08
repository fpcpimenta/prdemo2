export class ClienteDTO{

    public id: number | null;
    public cpfcnpj: string | null;
    public nome: string | null;

    public salario: number;

    constructor(){
        this.id = null;
        this.cpfcnpj = null;
        this.nome = null;

        this.salario = 0;

    }
}