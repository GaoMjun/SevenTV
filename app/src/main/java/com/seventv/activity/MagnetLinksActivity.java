package com.seventv.activity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import androidx.appcompat.widget.Toolbar;

import com.seventv.R;
import com.seventv.fragment.MagnetLinkListFragment;

import butterknife.BindView;
import butterknife.ButterKnife;

public class MagnetLinksActivity extends BaseActivity {

    private static final String EXTRA_ID = "id";

    @BindView(R.id.toolbar)
    Toolbar mToolbar;

    public static Intent newIntent(Context context, String id) {
        Intent intent = new Intent(context, MagnetLinksActivity.class);
        intent.putExtra(EXTRA_ID, id);
        return intent;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_magnet_link);

        ButterKnife.bind(this);

        setSupportActionBar(mToolbar);
        getSupportActionBar().setTitle("Magnet");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        getSupportFragmentManager()
                .beginTransaction()
                .replace(R.id.fragment_container, new MagnetLinkListFragment(getIntent().getStringExtra(EXTRA_ID)))
                .commit();
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                onBackPressed();
                return true;
        }
        return super.onOptionsItemSelected(item);
    }
}
