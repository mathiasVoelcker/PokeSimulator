CREATE TABLE USERS (
    ID NUMERIC(5) IDENTITY(1,1) PRIMARY KEY,
    USERNAME VARCHAR(64) NOT NULL,
    PASSWORD BINARY(64) NOT NULL,
    SALT BINARY(64) NOT NULL
)

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LOGS](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Message] [nvarchar](max) NULL,
	[MessageTemplate] [nvarchar](max) NULL,
	[Level] [nvarchar](max) NULL,
	[TimeStamp] [datetime] NULL,
	[Exception] [nvarchar](max) NULL,
	[Properties] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[LOGS] ADD  CONSTRAINT [PK_LOGS] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO


CREATE TABLE NATURES (
    ID NUMERIC(5) IDENTITY(1,1) PRIMARY KEY,
    NAME VARCHAR(50) NOT NULL,
    STRONG_STAT INTEGER,
    WEAK_STAT INTEGER,
)

CREATE TABLE TYPES (
    ID NUMERIC(5) IDENTITY(1,1) PRIMARY KEY,
    NAME VARCHAR(50)
)

CREATE TABLE TYPE_ADVANTAGES (
    ID NUMERIC(5) IDENTITY(1,1) PRIMARY KEY,
    EFFECT DECIMAL(2,1),
    ID_ATTACKING_TYPE NUMERIC(5) FOREIGN KEY REFERENCES TYPES(ID),
    ID_DEFENSIVE_TYPE NUMERIC(5) FOREIGN KEY REFERENCES TYPES(ID)
)

CREATE TABLE MOVES (
    ID NUMERIC(5) IDENTITY(1,1) PRIMARY KEY,
    NAME VARCHAR(50) NOT NULL,
    BASE_POWER NUMERIC (3),
    MOVE_CATEGORY NUMERIC(1),
    ID_TYPE NUMERIC(5) FOREIGN KEY REFERENCES TYPES(ID),
)

CREATE TABLE POKEMON_SPECIES (
    ID NUMERIC(5) IDENTITY(1,1) PRIMARY KEY,
    NATIONAL_NUMB NUMERIC(4),
    NAME VARCHAR(50) NOT NULL,
    URL_IMAGE VARCHAR(255),
    BASE_HP NUMERIC(4) NOT NULL,
    BASE_ATTACK NUMERIC(4) NOT NULL,
    BASE_DEFENSE NUMERIC(4) NOT NULL,
    BASE_SP_ATTACK NUMERIC(4) NOT NULL,
    BASE_SP_DEFENSE NUMERIC(4) NOT NULL,
    BASE_SPEED NUMERIC(4) NOT NULL,
    FIRST_TYPE_ID NUMERIC(5) REFERENCES TYPES(ID),
    SECOND_TYPE_ID NUMERIC(5) REFERENCES TYPES(ID)
)

CREATE TABLE POKEMONS (
    ID NUMERIC(5) IDENTITY(1,1) PRIMARY KEY,
    NICKNAME VARCHAR(50),
    LEVEL NUMERIC(3) NOT NULL,
    HP NUMERIC(4) NOT NULL,
    ATTACK NUMERIC(4) NOT NULL,
    DEFENSE NUMERIC(4) NOT NULL,
    SP_ATTACK NUMERIC(4) NOT NULL,
    SP_DEFENSE NUMERIC(4) NOT NULL,
    SPEED NUMERIC(4) NOT NULL,
    EV_HP NUMERIC(3) NOT NULL,
    EV_ATTACK NUMERIC(3) NOT NULL,
    EV_DEFENSE NUMERIC(3) NOT NULL,
    EV_SP_ATTACK NUMERIC(3) NOT NULL,
    EV_SP_DEFENSE NUMERIC(3) NOT NULL,
    EV_SPEED NUMERIC(3) NOT NULL,
    IV_HP NUMERIC(3) NOT NULL,
    IV_ATTACK NUMERIC(3) NOT NULL,
    IV_DEFENSE NUMERIC(3) NOT NULL,
    IV_SP_ATTACK NUMERIC(3) NOT NULL,
    IV_SP_DEFENSE NUMERIC(3) NOT NULL,
    IV_SPEED NUMERIC(3) NOT NULL,
    ID_POKEMON_SPECIES NUMERIC(5) FOREIGN KEY REFERENCES POKEMON_SPECIES(ID),
    ID_USER NUMERIC(5) FOREIGN KEY REFERENCES USERS(ID),
    ID_NATURE NUMERIC(5) FOREIGN KEY REFERENCES NATURES(ID),
    ID_MOVE_1 NUMERIC(5) FOREIGN KEY REFERENCES MOVES(ID),
    ID_MOVE_2 NUMERIC(5) FOREIGN KEY REFERENCES MOVES(ID),
    ID_MOVE_3 NUMERIC(5) FOREIGN KEY REFERENCES MOVES(ID),
    ID_MOVE_4 NUMERIC(5) FOREIGN KEY REFERENCES MOVES(ID),
)