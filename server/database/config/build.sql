begin;

drop table if exists CartItems CASCADE;
drop table if exists Products CASCADE;
drop table if exists Users CASCADE;

CREATE TABLE Users(
  id SERIAL PRIMARY KEY,
  role VARCHAR(255) NOT NULL DEFAULT 'client',
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE Products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  image VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE CartItems(
  id SERIAL PRIMARY KEY,
  userId INTEGER REFERENCES Users(id) ON DELETE CASCADE,
  productId INTEGER REFERENCES Products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

commit;