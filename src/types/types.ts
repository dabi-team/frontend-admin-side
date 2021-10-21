export interface ProductType{
        title: string,
        description: string,
        price: number,
        discount: number,
        category: string,
        images: string[],
        quantity: number,
        }
export interface CatType{
        title: string,
        description: string,
        images: string[],
        }

export interface field{
    name: string,
    statement:string,
    placeholder: string,
    type: string,
}

export type ImageUpload = {
        currentFile?: File | undefined ,
        previewImage?: string | undefined,
        progress?: number,
        message?: string,
        imageInfos?: string[],
    }