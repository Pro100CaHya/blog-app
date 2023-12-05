declare module "*.scss" {
    interface ICLassName {
        [className: string]: string
    }
    const classNames: ICLassName;
    export = classNames;
}

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

declare const __IS_DEV__: boolean;