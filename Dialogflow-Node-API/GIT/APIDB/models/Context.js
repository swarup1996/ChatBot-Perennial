module.exports = (sequelize, type) => {
    return sequelize.define('Context', {
        ContextId: {
          type: type.INTEGER,
          primaryKey: true,
          unique:true

        },

        SessionId: {
            type: type.UUID,
            unique:true,
            primaryKey:false
          },

        projectId: {
          type: type.STRING,
          primaryKey: false,
          autoIncrement: false,
          unique: true,
          foreignKey: true,
          references:{
            model:'Agents',
            Key:'projectId'
          },
        
        },
        displayName:{
          type : type.STRING
        },
        
        LifespanCount: {
        type:type.INTEGER
        }
    })

}

