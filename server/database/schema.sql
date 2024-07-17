CREATE TABLE user (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL
);

CREATE TABLE project (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    image_url VARCHAR(255),
    title VARCHAR(255),
    stack VARCHAR(255),
    description TEXT
);

CREATE TABLE comment (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    description TEXT,
    user_id INT UNSIGNED,
    project_id INT UNSIGNED,
    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (project_id) REFERENCES project(id)
);