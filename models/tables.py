# Define your tables below (or better in another model file) for example
#
# >>> db.define_table('mytable', Field('myfield', 'string'))
#
# Fields can be 'string','text','password','integer','double','boolean'
#       'date','time','datetime','blob','upload', 'reference TABLENAME'
# There is an implicit 'id integer autoincrement' field
# Consult manual for more options, validators, etc.




# after defining tables, uncomment below to enable auditing
# auth.enable_record_versioning(db)

def get_user_email():
    return None if auth.user is None else auth.user.email


db.define_table('outfit',
                Field('user_id', default=get_user_email()),
                Field('headgear_name', 'string'),
                Field('headgear_price', 'double'),
                Field('headgear_pg_url', 'string'),
                Field('headgear_img_url', 'string'),
                Field('top_name', 'string'),
                Field('top_price', 'double'),
                Field('top_pg_url', 'string'),
                Field('top_img_url', 'string'),
                Field('outerwear_name', 'string'),
                Field('outerwear_price', 'double'),
                Field('outerwear_pg_url', 'string'),
                Field('outerwear_img_url', 'string'),
                Field('bottoms_name', 'string'),
                Field('bottoms_price', 'double'),
                Field('bottoms_pg_url', 'string'),
                Field('bottoms_img_url', 'string'),
                Field('footwear_name', 'string'),
                Field('footwear_price', 'double'),
                Field('footwear_pg_url', 'string'),
                Field('footwear_img_url', 'string')
                )