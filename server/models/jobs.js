const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs', {
    job_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "NULL",
      primaryKey: true
    },
    job_title: {
      type: DataTypes.STRING(35),
      allowNull: true,
      defaultValue: "NULL",
      unique: "unique_job_title"
    },
    min_salary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    max_salary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jobs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_job_id",
        unique: true,
        fields: [
          { name: "job_id" },
        ]
      },
      {
        name: "unique_job_title",
        unique: true,
        fields: [
          { name: "job_title" },
        ]
      },
    ]
  });
};
