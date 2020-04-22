create table tbUtilisateurs (
	idUtil int unsigned auto_increment,
    typeCompte char(8) not null,
    nom char(50),
    prenom char(50),
    mail char(100) not null,
    mdp char(100) not null,
    dateCreation DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), 
    primary key (idUtil)
);
create table tbAnnonces (
	idAnnonces int unsigned auto_increment,
    idUtil int unsigned,
    titre long varchar,
    texteAnnonce long varchar,
    dateCreation DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), 
    primary key (idAnnonces),
    foreign key (idUtil) references tbUtilisateurs(idUtil) on update cascade on delete set null
);
create table tbHoraires (
	idHoraires int unsigned auto_increment,
    idUtil int unsigned,
    url long varchar,
    dateCreation DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), 
    primary key (idHoraires),
    foreign key (idUtil) references tbUtilisateurs(idUtil) on update cascade on delete set null
);
create table tbChat (
	idMessage int unsigned auto_increment,
    idUtil int unsigned,
    texteMessage long varchar,
    dateCreation DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(), 
    primary key (idMessage),
    foreign key (idUtil) references tbUtilisateurs(idUtil) on update cascade on delete set null
);
insert into tbUtilisateurs (typeCompte,nom,prenom,mail,mdp)
values ('admin','Dupont','Jean','jean.dupont5645@gmail.com','monmotdepasse');
insert into tbUtilisateurs (typeCompte,nom,prenom,mail,mdp)
values ('crew','Delestienne','Damien','damiendelestienne4@gmail.com','monmotdepasse');
insert into tbAnnonces (idUtil,texteAnnonce)
values (1,'Alors voici l''annonce concernant les nouveaux burgers');
insert into tbChat (idUtil,texteMessage)
values (2, 'salut ça va?');


    
