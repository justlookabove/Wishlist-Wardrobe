# Here go your api methods.

@auth.requires_signature()
def get_outfits():
    outfits = db(db.outfit.user_id == auth.user.email).select()
    return response.json(dict(outfits=outfits))

@auth.requires_signature()
def create_outfit():
    outfit_id = db.outfit.insert(

        headgear_name = str(request.vars.headgear_name),
        headgear_price = float(request.vars.headgear_price),
        headgear_pg_url = str(request.vars.headgear_pg_url),
        headgear_img_url = str(request.vars.headgear_img_url),

        top_name = str(request.vars.top_name),
        top_price = float(request.vars.top_price),
        top_pg_url = str(request.vars.top_pg_url),
        top_img_url = str(request.vars.top_img_url),

        outerwear_name = str(request.vars.outerwear_name),
        outerwear_price = float(request.vars.outerwear_price),
        outerwear_pg_url = str(request.vars.outerwear_pg_url),
        outerwear_img_url = str(request.vars.outerwear_img_url),

        bottoms_name = str(request.vars.bottoms_name),
        bottoms_price = float(request.vars.bottoms_price),
        bottoms_pg_url = str(request.vars.bottoms_pg_url),
        bottoms_img_url = str(request.vars.bottoms_img_url),

        footwear_name = str(request.vars.footwear_name),
        footwear_price = float(request.vars.footwear_price),
        footwear_pg_url = str(request.vars.footwear_pg_url),
        footwear_img_url = str(request.vars.footwear_img_url),
    )
    # We return the id of the new post, so we can insert it along all the others.
    return response.json(dict(outfit_id=outfit_id))


@auth.requires_signature()
def delete_outfit():
    outfit_id = int(request.vars.outfit_id)
    row = db((db.outfit.id == outfit_id) & (db.outfit.user_id == auth.user.email)).select().first()
    row.delete_record()

    return "ok"

@auth.requires_signature()
def update_outfit():
    outfit_id = int(request.vars.outfit_id)
    row = db((db.outfit.id == outfit_id) & (db.outfit.user_id == auth.user.email)).select().first()

    row.headgear_name = str(request.vars.headgear_name)
    row.headgear_price = float(request.vars.headgear_price)
    row.headgear_pg_url = str(request.vars.headgear_pg_url)
    row.headgear_img_url = str(request.vars.headgear_img_url)

    row.top_name = str(request.vars.top_name)
    row.top_price = float(request.vars.top_price)
    row.top_pg_url = str(request.vars.top_pg_url)
    row.top_img_url = str(request.vars.top_img_url)

    row.outerwear_name = str(request.vars.outerwear_name)
    row.outerwear_price = float(request.vars.outerwear_price)
    row.outerwear_pg_url = str(request.vars.outerwear_pg_url)
    row.outerwear_img_url = str(request.vars.outerwear_img_url)

    row.bottoms_name = str(request.vars.bottoms_name)
    row.bottoms_price = float(request.vars.bottoms_price)
    row.bottoms_pg_url = str(request.vars.bottoms_pg_url)
    row.bottoms_img_url = str(request.vars.bottoms_img_url)

    row.footwear_name = str(request.vars.footwear_name)
    row.footwear_price = float(request.vars.footwear_price)
    row.footwear_pg_url = str(request.vars.footwear_pg_url)
    row.footwear_img_url = str(request.vars.footwear_img_url)

    row.update_record()

    return "ok"