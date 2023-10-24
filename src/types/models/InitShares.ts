// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression} from "@subql/types-core";
import assert from 'assert';



export type InitSharesProps = Omit<InitShares, NonNullable<FunctionPropertyNames<InitShares>>| '_name'>;

export class InitShares implements Entity {

    constructor(
        
        id: string,
        _noInitialShares: bigint,
        sharesSubject: string,
    ) {
        this.id = id;
        this._noInitialShares = _noInitialShares;
        this.sharesSubject = sharesSubject;
        
    }

    public id: string;
    public blockHeight?: bigint;
    public _blockTime?: bigint;
    public _noInitialShares: bigint;
    public sharesSubject: string;
    

    get _name(): string {
        return 'InitShares';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save InitShares entity without an ID");
        await store.set('InitShares', id.toString(), this);
    }

    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove InitShares entity without an ID");
        await store.remove('InitShares', id.toString());
    }

    static async get(id:string): Promise<InitShares | undefined>{
        assert((id !== null && id !== undefined), "Cannot get InitShares entity without an ID");
        const record = await store.get('InitShares', id.toString());
        if (record) {
            return this.create(record as InitSharesProps);
        } else {
            return;
        }
    }

    static async getByFields(filter: FieldsExpression<InitSharesProps>[], options?: { offset?: number, limit?: number}): Promise<InitShares[]> {
        const records = await store.getByFields('InitShares', filter, options);
        return records.map(record => this.create(record as InitSharesProps));
    }

    static create(record: InitSharesProps): InitShares {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
            record.id,
            record._noInitialShares,
            record.sharesSubject,
        );
        Object.assign(entity,record);
        return entity;
    }
}
