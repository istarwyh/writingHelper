
export default class Utils {
    static notNull(o: any): any {
        if (o === null) {
            throw o + "should not be null!"
        } else {
            return o;
        }
    }
    /**
     * 
     * @param o todo Add generic type
     * @returns 
     */
    static notUndefined(o: Node | undefined): Node {
        if (o !== undefined) {
            return o;
        } else {
            throw o + "should be found && not be undefinded!"
        }
    }

    static notBlank(o: string): boolean {
        return o === "" ? false : true;
    }
}