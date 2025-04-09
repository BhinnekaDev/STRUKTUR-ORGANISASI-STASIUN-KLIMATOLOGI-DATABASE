create type "public"."Nama_Instansi_enum" as enum ('Meteorologi', 'Klimatologi', 'Geofisika');

create type "public"."Peran_enum" as enum ('admin', 'superadmin');

create table "public"."Admin" (
    "ID_Admin" integer generated always as identity not null,
    "ID_Instansi" integer not null,
    "Nama_Depan_Admin" character varying(100) not null,
    "Nama_Belakang_Admin" character varying(100),
    "Email_Admin" character varying(150) not null,
    "Kata_Sandi_Admin" text not null,
    "Peran" "Peran_enum" not null
);


create table "public"."Instansi" (
    "ID_Instansi" integer generated always as identity not null,
    "Nama_Instansi" "Nama_Instansi_enum" not null
);


create table "public"."Jabatan" (
    "ID_Jabatan" integer generated always as identity not null,
    "Nama_Jabatan" character varying(100) not null
);


create table "public"."Petugas" (
    "NIP" integer not null,
    "ID_Jabatan" integer not null,
    "Nama_Depan_Petugas" character varying(100) not null,
    "Nama_Belakang_Petugas" character varying(100) not null,
    "No_Telepon_Petugas" integer not null,
    "Foto_Petugas" text not null,
    "Masa_Bakti" timestamp without time zone not null
);


create table "public"."Struktur_Organisasi" (
    "ID_Struktur" integer generated always as identity not null,
    "ID_Instansi" integer not null,
    "Periode" timestamp without time zone not null,
    "NIP" integer not null
);


CREATE UNIQUE INDEX "Admin_Email_Admin_key" ON public."Admin" USING btree ("Email_Admin");

CREATE UNIQUE INDEX "Admin_pkey" ON public."Admin" USING btree ("ID_Admin");

CREATE UNIQUE INDEX "Instansi_pkey" ON public."Instansi" USING btree ("ID_Instansi");

CREATE UNIQUE INDEX "Jabatan_pkey" ON public."Jabatan" USING btree ("ID_Jabatan");

CREATE UNIQUE INDEX "Petugas_pkey" ON public."Petugas" USING btree ("NIP");

CREATE UNIQUE INDEX "Struktur_Organisasi_pkey" ON public."Struktur_Organisasi" USING btree ("ID_Struktur");

alter table "public"."Admin" add constraint "Admin_pkey" PRIMARY KEY using index "Admin_pkey";

alter table "public"."Instansi" add constraint "Instansi_pkey" PRIMARY KEY using index "Instansi_pkey";

alter table "public"."Jabatan" add constraint "Jabatan_pkey" PRIMARY KEY using index "Jabatan_pkey";

alter table "public"."Petugas" add constraint "Petugas_pkey" PRIMARY KEY using index "Petugas_pkey";

alter table "public"."Struktur_Organisasi" add constraint "Struktur_Organisasi_pkey" PRIMARY KEY using index "Struktur_Organisasi_pkey";

alter table "public"."Admin" add constraint "Admin_Email_Admin_key" UNIQUE using index "Admin_Email_Admin_key";

alter table "public"."Admin" add constraint "Admin_ID_Instansi_fkey" FOREIGN KEY ("ID_Instansi") REFERENCES "Instansi"("ID_Instansi") not valid;

alter table "public"."Admin" validate constraint "Admin_ID_Instansi_fkey";

alter table "public"."Petugas" add constraint "Petugas_ID_Jabatan_fkey" FOREIGN KEY ("ID_Jabatan") REFERENCES "Jabatan"("ID_Jabatan") not valid;

alter table "public"."Petugas" validate constraint "Petugas_ID_Jabatan_fkey";

alter table "public"."Struktur_Organisasi" add constraint "Struktur_Organisasi_ID_Instansi_fkey" FOREIGN KEY ("ID_Instansi") REFERENCES "Instansi"("ID_Instansi") not valid;

alter table "public"."Struktur_Organisasi" validate constraint "Struktur_Organisasi_ID_Instansi_fkey";

alter table "public"."Struktur_Organisasi" add constraint "Struktur_Organisasi_NIP_fkey" FOREIGN KEY ("NIP") REFERENCES "Petugas"("NIP") not valid;

alter table "public"."Struktur_Organisasi" validate constraint "Struktur_Organisasi_NIP_fkey";

grant delete on table "public"."Admin" to "anon";

grant insert on table "public"."Admin" to "anon";

grant references on table "public"."Admin" to "anon";

grant select on table "public"."Admin" to "anon";

grant trigger on table "public"."Admin" to "anon";

grant truncate on table "public"."Admin" to "anon";

grant update on table "public"."Admin" to "anon";

grant delete on table "public"."Admin" to "authenticated";

grant insert on table "public"."Admin" to "authenticated";

grant references on table "public"."Admin" to "authenticated";

grant select on table "public"."Admin" to "authenticated";

grant trigger on table "public"."Admin" to "authenticated";

grant truncate on table "public"."Admin" to "authenticated";

grant update on table "public"."Admin" to "authenticated";

grant delete on table "public"."Admin" to "service_role";

grant insert on table "public"."Admin" to "service_role";

grant references on table "public"."Admin" to "service_role";

grant select on table "public"."Admin" to "service_role";

grant trigger on table "public"."Admin" to "service_role";

grant truncate on table "public"."Admin" to "service_role";

grant update on table "public"."Admin" to "service_role";

grant delete on table "public"."Instansi" to "anon";

grant insert on table "public"."Instansi" to "anon";

grant references on table "public"."Instansi" to "anon";

grant select on table "public"."Instansi" to "anon";

grant trigger on table "public"."Instansi" to "anon";

grant truncate on table "public"."Instansi" to "anon";

grant update on table "public"."Instansi" to "anon";

grant delete on table "public"."Instansi" to "authenticated";

grant insert on table "public"."Instansi" to "authenticated";

grant references on table "public"."Instansi" to "authenticated";

grant select on table "public"."Instansi" to "authenticated";

grant trigger on table "public"."Instansi" to "authenticated";

grant truncate on table "public"."Instansi" to "authenticated";

grant update on table "public"."Instansi" to "authenticated";

grant delete on table "public"."Instansi" to "service_role";

grant insert on table "public"."Instansi" to "service_role";

grant references on table "public"."Instansi" to "service_role";

grant select on table "public"."Instansi" to "service_role";

grant trigger on table "public"."Instansi" to "service_role";

grant truncate on table "public"."Instansi" to "service_role";

grant update on table "public"."Instansi" to "service_role";

grant delete on table "public"."Jabatan" to "anon";

grant insert on table "public"."Jabatan" to "anon";

grant references on table "public"."Jabatan" to "anon";

grant select on table "public"."Jabatan" to "anon";

grant trigger on table "public"."Jabatan" to "anon";

grant truncate on table "public"."Jabatan" to "anon";

grant update on table "public"."Jabatan" to "anon";

grant delete on table "public"."Jabatan" to "authenticated";

grant insert on table "public"."Jabatan" to "authenticated";

grant references on table "public"."Jabatan" to "authenticated";

grant select on table "public"."Jabatan" to "authenticated";

grant trigger on table "public"."Jabatan" to "authenticated";

grant truncate on table "public"."Jabatan" to "authenticated";

grant update on table "public"."Jabatan" to "authenticated";

grant delete on table "public"."Jabatan" to "service_role";

grant insert on table "public"."Jabatan" to "service_role";

grant references on table "public"."Jabatan" to "service_role";

grant select on table "public"."Jabatan" to "service_role";

grant trigger on table "public"."Jabatan" to "service_role";

grant truncate on table "public"."Jabatan" to "service_role";

grant update on table "public"."Jabatan" to "service_role";

grant delete on table "public"."Petugas" to "anon";

grant insert on table "public"."Petugas" to "anon";

grant references on table "public"."Petugas" to "anon";

grant select on table "public"."Petugas" to "anon";

grant trigger on table "public"."Petugas" to "anon";

grant truncate on table "public"."Petugas" to "anon";

grant update on table "public"."Petugas" to "anon";

grant delete on table "public"."Petugas" to "authenticated";

grant insert on table "public"."Petugas" to "authenticated";

grant references on table "public"."Petugas" to "authenticated";

grant select on table "public"."Petugas" to "authenticated";

grant trigger on table "public"."Petugas" to "authenticated";

grant truncate on table "public"."Petugas" to "authenticated";

grant update on table "public"."Petugas" to "authenticated";

grant delete on table "public"."Petugas" to "service_role";

grant insert on table "public"."Petugas" to "service_role";

grant references on table "public"."Petugas" to "service_role";

grant select on table "public"."Petugas" to "service_role";

grant trigger on table "public"."Petugas" to "service_role";

grant truncate on table "public"."Petugas" to "service_role";

grant update on table "public"."Petugas" to "service_role";

grant delete on table "public"."Struktur_Organisasi" to "anon";

grant insert on table "public"."Struktur_Organisasi" to "anon";

grant references on table "public"."Struktur_Organisasi" to "anon";

grant select on table "public"."Struktur_Organisasi" to "anon";

grant trigger on table "public"."Struktur_Organisasi" to "anon";

grant truncate on table "public"."Struktur_Organisasi" to "anon";

grant update on table "public"."Struktur_Organisasi" to "anon";

grant delete on table "public"."Struktur_Organisasi" to "authenticated";

grant insert on table "public"."Struktur_Organisasi" to "authenticated";

grant references on table "public"."Struktur_Organisasi" to "authenticated";

grant select on table "public"."Struktur_Organisasi" to "authenticated";

grant trigger on table "public"."Struktur_Organisasi" to "authenticated";

grant truncate on table "public"."Struktur_Organisasi" to "authenticated";

grant update on table "public"."Struktur_Organisasi" to "authenticated";

grant delete on table "public"."Struktur_Organisasi" to "service_role";

grant insert on table "public"."Struktur_Organisasi" to "service_role";

grant references on table "public"."Struktur_Organisasi" to "service_role";

grant select on table "public"."Struktur_Organisasi" to "service_role";

grant trigger on table "public"."Struktur_Organisasi" to "service_role";

grant truncate on table "public"."Struktur_Organisasi" to "service_role";

grant update on table "public"."Struktur_Organisasi" to "service_role";


