export class ServerContext {
	private static iniDate: Date;
	public static getIniDate() {
		return this.iniDate;
	}
	public static setIniDate(iniDate: Date) {
		this.iniDate = iniDate;
	}
}