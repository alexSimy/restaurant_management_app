import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import postgresqlSeq from '../../services/postgresql';
import { Restaurant } from './restaurant.schema';

interface RestaurantModel
  extends Model<
    InferAttributes<RestaurantModel>,
    InferCreationAttributes<RestaurantModel>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const restaurants = postgresqlSeq.define<RestaurantModel>(
  'Restaurant',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'restaurant',
  }
);

postgresqlSeq
  .sync({ force: false })
  .then(function () {
    console.log('CONNECTION ESTABLISHED SUCCESSFULLY');
  })
  .catch(function () {
    console.log('CONNECTION REFUSED');
  });

export default restaurants;
