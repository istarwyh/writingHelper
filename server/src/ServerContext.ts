export class ServerContext {
	private static iniDate: Date;
	public static getIniDate(): Date {
		return this.iniDate;
	}
	public static setIniDate(iniDate: Date): void {
		this.iniDate = iniDate;
	}
}