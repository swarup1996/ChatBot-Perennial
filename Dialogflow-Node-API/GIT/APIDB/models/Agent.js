module.exports = (sequelize, type) => {
    return sequelize.define('Agent', {
      email: {
        type: type.STRING(255),
        field: 'email',
        allowNull: false,
        unique: true
      },
      password: {
        type: type.STRING(255),
        field: 'password',
        allowNull: false
      },
      roletype: {
        type: type.STRING(255),
        field: 'roletype',
        allowNull: false
      },
      projectId: {
        type: type.STRING(255),
        primaryKey: true,
        autoIncrement: false,
        unique: false,
      },

        displayName:{
          type : type.STRING(255)
        },
      
    })

}
