declare module "*.scss" {
    interface ICLassName {
        [className: string]: string
    }
    const classNames: ICLassName;
    export = classNames;
}