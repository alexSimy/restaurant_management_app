import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import postgresqlSeq from '../../services/postgresql';

interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  username: string;
  password: string;
  token: string;
}

const users = postgresqlSeq.define<UserModel>(
  'Users',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
  }
);

postgresqlSeq
  .sync({ force: false })
  .then(function () {
    console.log('CONNECTION ESTABLISHED SUCCESSFULLY FOR users TABLE');
  })
  .catch(function () {
    console.log('CONNECTION REFUSED FOR users TABLE');
  });

export default users;
