function isPIP(pt, poly){

  var result = false
  for (i=1; i < poly.length; i++){
      if (!(poly[i-1].x > pt.x && poly[i].x > pt.x)
         && (

         (poly[i-1].y < pt.y && poly[i].y > pt.y) ||
         (poly[i-1].y > pt.y && poly[i].y < pt.y) ||

         (poly[i-1].y <= pt.y && poly[i].y > pt.y)  ||
         (poly[i-1].y >= pt.y && poly[i].y < pt.y)


        )){
            result = !(result)
      }
  }
  return result
}
