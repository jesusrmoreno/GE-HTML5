


		Works for grabbing onto things _under.
		if ((a.maxY > b.maxY) && (a.y > b.maxY)) {
			if ((!((a.maxX <= b.x) && (a.x < b.x))) && (!((a.maxX > b.maxX) && (a.x >= b.maxX)))){
				if ((a.y - b.maxY) < 2) {
					a.vy = 0;
				}
			}
		}
		