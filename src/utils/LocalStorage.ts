type Storage = typeof window.localStorage

export class LocalStorage {
    private readonly storage: Storage;

    protected constructor(getStorage = (): Storage => window.localStorage) {
        this.storage = getStorage();
    }
}