
//no lo quise borrar para hacer algunas pruebas después. Pero realmente no esta haciendo ninguna función. 

export class FileItem {

    public file: File;
    public fileName: String;
    public url: String;
    public loading: Boolean;
    public progress: Number;

    constructor ( file:File ) {
        
        this.file = file;
        this.fileName = file.name;
        this.loading = false;
        this.progress = 0;
        
    }

}