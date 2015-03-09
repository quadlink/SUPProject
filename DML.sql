DROP TABLE aluno;
DROP TABLE empresa;

CREATE TABLE aluno(
	-- A alterar valores se necessario
	e-mail VARCHAR2(20),
	nome VARCHAR2(20) CONSTRAINT nn_aluno_nome NOT NULL,
	passwd VARCHAR2(15) CONSTRAINT nn_aluno_passwd NOT NULL,
	
	percursoAcademico VARCHAR2(500) CONSTRAINT nn_aluno_percursoAcademico NOT NULL,
	conhecimentosEcapacidades VARCHAR2(500) CONSTRAINT nn_aluno_conhecimentosEcapacidades NOT NULL,

	CONSTRAINT pk_aluno
		PRIMARY KEY (e-mail)

);

CREATE TABLE empresa(
	-- A alterar valores se necessario
	e-mail VARCHAR2(20),
	nome VARCHAR2(20) CONSTRAINT nn_empresa_nome NOT NULL,
	passwd VARCHAR2(15) CONSTRAINT nn_empresa_passwd NOT NULL,
	
	website VARCHAR2(25) CONSTRAINT nn_empresa_website NOT NULL,
	contacto NUMBER(9) CONSTRAINT nn_empresa_contacto NOT NULL,
	descricao VARCHAR2(50),
	
	CONSTRAINT pk_empresa
		PRIMARY KEY (e-mail),
		
	CONSTRAINT un_empresa
		UNIQUE (website),
		
	CONSTRAINT un_empresa
		UNIQUE (contacto)--,

	CONSTRAINT ck_empresa_contacto
		CHECK (contacto>99999999) -- Para garantir que fica um numero com 9 valores

);

CREATE TABLE oportunidade(
	cargo VARCHAR2(20),
	requisitos VARCHAR2(500), 
	
	e-mail VARCHAR2(20),
	
	CONSTRAINT pk_oportunidade
		PRIMARY KEY (cargo,e-mail);
		
	CONSTRAINT fk_oportunidade
		FOREIGN KEY (e-mail) REFERENCES empresa
			DELETE ON CASCADE
);



