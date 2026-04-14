import fs from 'fs/promises'

class User {
    path = './data/users.json';
    list = []
    constructor(){
        
    }
    async readJSON(){
        const data = await fs.readFile(this.path);
        const json = JSON.parse(data);
        this.list = json;
    }
    async saveJSON(){
        const data = JSON.stringify(this.list, null, 2);
        await fs.writeFile(this.path, data);
    }
    async save(user){
        await this.readJSON();
        const id = crypto.randomUUID();
        user.id = id;
        this.list.push(user);
        await this.saveJSON();
        return id;
    }

    async find(){
        await this.readJSON()
        return this.list;
    }

    async findById (id){
        await this.readJSON();
        const user = this.list.find( u => u.id === id);
        return user;
    }

    async findByEmail (email){
        await this.readJSON();
        const user = this.list.find( u => u.email === email);
        return user;
    }
    
    async deleteById( id) { 
        await this.readJSON();
    }
    async updateById( id, user){
        await this.readJSON();
        const index = this.list.findIndex( u => u.id === id);
        if( index != -1){
            this.list[index] = { ...this.list[index], ...user};
            return this.list[index]
        } else {
            return null;
        }
    }
}

export default User