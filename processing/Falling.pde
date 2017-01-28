ArrayList<Powder> powderList;
color currentColor;
int r, g, b;
boolean moving;

void setup() {
  size(500, 500);
  background(233, 237, 241);
  powderList = new ArrayList<Powder>();
  r = 68;
  g = 88;
  b = 112;
  currentColor = color(r, g, b);
  frameRate(60);
  moving = true;
  textAlign(RIGHT, BOTTOM);
  fill(255);
  textSize(32);

  //What was here before?
  //A LOT of Sand.
  //Trust me it really wasn't worth seeing this anyways.
}

void draw() {
  if (mousePressed) {
    if (mouseButton == LEFT) powderList.add(new Sand(mouseX, mouseY, currentColor));
    else powderList.add(new Water(mouseX, mouseY, currentColor));
  }
  if (keyPressed) {
    if (key == 'r') r++;
    else if (key == 'g') g++;
    else if (key == 'b') b++;
    if (r > 255) r -= 255;
    else if (g > 255) g -= 255;
    else if (b > 255) b -= 255;
    currentColor = color(r, g, b);
  }
  background(233, 237, 241);
  for (Powder i : powderList) {
    if (moving) i.move(powderList);
    i.show();
  }
}

void keyPressed() {
  if (key == ' ') moving = !moving;
  else if (key == 'c') powderList = new ArrayList<Powder>();
}

public abstract class Powder {
  public int x, y;
  public color powderColor;
  
  Powder(float x, float y, color z) {
    this.x = (int) x;
    this.y = (int) y;
    powderColor = z;
  }
  
  abstract public void move(ArrayList<Powder> stuff);
  
  public void show() {
    stroke(powderColor);
    point(x, y);
  }
}
public class Sand extends Powder {

  Sand(int x, int y, color z) {
    super(x, y, z);
  }

  public void move(ArrayList<Powder> stuff) {
    y += 1;
    if (y > height) y -= height;
  }
}
public class Water extends Powder {

  Water(int x, int y, color z) {
    super(x, y, z);
  }

  public void move(ArrayList<Powder> stuff) {
    boolean canMove = true;
    for (Powder i : stuff) {
      if (i.x == this.x && i.y - 1 == this.y) {
        canMove = false;
        break;
      }
    }
    if (canMove) y += 2;
    else if (random(1) > 0.5) x += 1;
    else x -= 1;
    if (y > height) y -= height;
  }
}
