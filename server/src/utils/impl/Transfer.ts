import ITransfer from '../ITransfer';
/**
 * todo 测试版本
 */
export default class Transfer implements ITransfer {
	str: string;
	public constructor(str: string) {
		this.str = str;
	}
	public builder(str: string): Transfer {
		this.str = str;
		return this;
	}
	upper2proto(): Transfer {
		if (this.str.charAt(0) > 'A')
			this.str = this.str.toLowerCase();
		return this;
	}
	ing2proto(): Transfer {
		if (/ing$/.test(this.str))
			this.str = this.str.substring(0, this.str.length - 3);
		return this;
	}
	passive2proto(): Transfer {
		if (/ed$/.test(this.str))
			this.str = this.str.substring(0, this.str.length - 2);
		return this;
	}
	past2proto(): Transfer {
		if (/ed$/.test(this.str))
			this.str = this.str.substring(0, this.str.length - 2);
		return this;
	}

	public toString() {
		return this.str;
	}
}