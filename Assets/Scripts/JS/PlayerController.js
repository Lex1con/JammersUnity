#pragma strict

private var rb: Rigidbody;

public var speed = 0.0;

private var count: int;

public var countText: GameObject;
countText.Find('countText');

public var winText: GameObject;
winText.Find('winText');

function Start () {
	rb = GetComponent(Rigidbody);

	count = 0;
	SetCountText();
	winText.GetComponent(UI.Text).text = "";
}

function FixedUpdate () {
	var moveHorizontal = Input.GetAxis("Horizontal");

	var moveVertical = Input.GetAxis("Vertical");

	var movement = Vector3(moveHorizontal, 0.0f, moveVertical);

	rb.AddForce(movement * speed);
}

function OnTriggerEnter(other: Collider){

	if(other.gameObject.CompareTag("Pick Up")){

		other.gameObject.SetActive(false);

		count = count + 1;

		SetCountText();
	}

}

function SetCountText(){

	countText.GetComponent(UI.Text).text = "Count: " + count;
	if (count >= 12){
		winText.GetComponent(UI.Text).text = "You Win";
	}
}