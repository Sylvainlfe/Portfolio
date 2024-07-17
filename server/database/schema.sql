CREATE TABLE user (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
);

create table comment (
  id int unsigned primary key auto_increment not null,
  description TEXT,
  user_id INT,
  foreign key(user_id) references user(id)
);
