module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image3: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        link: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        group: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    return Item;
};
